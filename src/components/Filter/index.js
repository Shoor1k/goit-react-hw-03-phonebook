import s from "./Filter.module.css";
import PropTypes from 'prop-types';


const Filter = ({ filter, onFilterInput }) => {
    return (
        <>
            <form>
                <label> Find contacts by name
                    <input type="text"
                        className={s.inputText}
                        name="filter"
                        value={filter}
                        onChange={onFilterInput} />
                </label>
            </form>
        </>
    )
}
Filter.propTypes = {
    filter: PropTypes.string,
    onFilterInput: PropTypes.func.isRequired,
};
export default Filter