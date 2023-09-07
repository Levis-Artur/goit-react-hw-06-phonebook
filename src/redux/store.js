import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsReduser } from "./contactsSlice"
import { filterReduser } from "./filterSlice"
import { persistStore, persistReducer, FLUSH, REHYDRATE,
  PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
    contacts: contactsReduser,
    filter: filterReduser
})

const persistConfig = {
  key: 'pfhone-book',
  storage,
  blacklist: ["filter"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export  const persistor = persistStore(store)