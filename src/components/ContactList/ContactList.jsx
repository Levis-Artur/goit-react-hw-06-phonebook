import css from './ContactList.module.css'
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from "react-redux";
import { getVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
    const visibleContacts = useSelector(getVisibleContacts)
    return (
    <>
        {visibleContacts && 
        <ul className={css.list}>
            {visibleContacts.map(({id, name, number }) => {
                return <ContactItem key={id} id={id} name={name} number={number} />
            })}
        </ul >
            }
    </>
    )
    
}


