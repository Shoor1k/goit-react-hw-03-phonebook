import PropTypes from 'prop-types';
import s from './Section.module.css'

const Section = ({ title, children }) => {
    return (
        <section className={s.section}>
            <h2>
                {title}
            </h2>
            {children}
        </section>

    )
}
Section.prototype = {
    title: PropTypes.string.isRequired,
}
export default Section