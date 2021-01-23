import s from "./ContactForm.module.css";
import { Component } from 'react'
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
    state = {
        name: ' ',
        number: ' ',
    }
    handeInputCange = e => {
        const { name, value } = e.currentTarget;
        this.setState(
            { [name]: value }
        )
    }
    handeInputSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.setState({
            name: ' ',
            number: ' ',
        })
    }

    render() {
        const { name, number } = this.state
        return (
            <form onSubmit={this.handeInputSubmit} className={s.wraper}>
                <label htmlFor={`id${name}`} className={s.labelTitle}> Name </label>
                <input type="text"
                    name="name"
                    value={name}
                    id={`id${name}`}
                    className={s.inputText}
                    onChange={this.handeInputCange} />

                <label htmlFor={`id${number}`} className={s.labelTitle}> Number </label>
                <input type="text"
                    name="number"
                    id={`id${number}`}
                    value={number}
                    className={s.inputText}
                    onChange={this.handeInputCange} />

                <button type="submit" className={s.btnSubmit}> Add Contact</button>

            </form>
        )
    }
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};