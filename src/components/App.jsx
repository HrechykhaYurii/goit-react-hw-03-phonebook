import React, { Component } from "react";
import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

const LS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const dataNumbers = localStorage.getItem(LS_KEY);
    if (dataNumbers) {
      this.setState({ contacts: JSON.parse(dataNumbers) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
  }

   handlerSubmit = newContact => {
    this.setState(({ contacts }) =>
      contacts.find(contact => contact.name === newContact.name)
        ? alert(`${newContact.name} is already in contacts`)
        : { contacts: [newContact , ...contacts] }
    );
  };

   deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };
    

  render() {

    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    
    return(
      <Layout>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handlerSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onFilter={this.onFilter} />
        <ContactList deleteContact={this.deleteContact} contacts={filteredContacts} />
      </Layout>
   );
}
};
