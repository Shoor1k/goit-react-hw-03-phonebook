import { Component } from "react";
import shortid from 'shortid'
import Section from "./components//Section";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

export default class App extends Component {
  state = {
    contacts: [
    ],
    filter: ' ',
  }
  componentDidMount() {
    const contactLocalStorage = localStorage.getItem(`contacts`)
    const parsedContactsLS = JSON.parse(contactLocalStorage)
    if (parsedContactsLS) {
      this.setState(
        { contacts: parsedContactsLS }
      )
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(`contacts`, JSON.stringify(this.state.contacts))
    }

  }

  formSubmitHandler = data => {
    let formName = data.name;
    let formNumber = data.number
    const { contacts } = this.state;
    if (contacts.find(({ name }) => name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    if (formName.trim() === '') {
      alert(`enter the name contact`)
      return
    }
    if (formNumber.trim() === '') {
      alert(`enter the phone number of the contact`)
      return
    }

    const newContact = { id: shortid.generate(), name: data.name, number: data.number };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact]
      };
    })
  }

  filterHandle = () => {
    const { filter, contacts } = this.state;

    return filter
      ? contacts.filter(({ name }) =>
        name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
      )
      : contacts;
  }

  filterInputhandler = e => {
    const filter = e.target.value;
    this.setState({ filter });

  };

  onDelete = e => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts.filter(({ id }) => id !== e.target.id),
        ],
      };
    });
  };

  render() {
    const { filter, contacts } = this.state
    return (
      <>
        <Section title='Phonebook'>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title='Contacts'>
          {contacts.length > 1 && <Filter value={filter} onFilterInput={this.filterInputhandler} />}
          <ContactList contacts={this.filterHandle()} onDelete={this.onDelete} />
        </Section>
      </>
    )
  }


}

