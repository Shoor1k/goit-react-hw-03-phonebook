import s from "./ContactList.module.css";
import PropTypes from 'prop-types';


const ContactList = ({ contacts, onDelete }) => {


    return (

        < ul className={s.contactsList}>
            {contacts.map(({ id, name, number }) => (
                <li key={id}>
                    {name}: {number}
                    <button id={id} onClick={onDelete} className={s.button}>
                        Delete
                    </button>
                </li>
            ))}
        </ul >
    )

}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ),
    onDelete: PropTypes.func.isRequired,
};
export default ContactList