
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import css from '../ContactForm/ContactForm.module.css'

export const Filter = () => {
    const filter = useSelector(getFilter) || "";
    const dispatch = useDispatch();
    const handleChange = (e) => dispatch(setFilter(e.target.value))
    return (
        <label className={css["contact-label"]}>
              Find contact by name    
              <input
                type="text"
                name="filter"
                value={filter}
                onChange={handleChange}
                className={css["contact-input"]}
              />
            </label>
    )
}

