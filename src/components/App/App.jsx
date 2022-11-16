import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from '../Section/Section';
import { FormContact } from 'components/FormContact/FormContact';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Title, SubTitle } from './App.styled';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    this.setState(({ contacts }) => ({
      contacts: [{ ...data, id: nanoid() }, ...contacts],
    }));
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedContact = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedContact);
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const filterContacts = this.getFilterContacts();

    return (
      <Section>
        <Title>Phonebook</Title>
        <FormContact onSubmitHandle={this.formSubmitHandler} />
        {contacts.length > 0 && (
          <>
            <SubTitle>Contacts</SubTitle>
            <Filter value={filter} onChange={this.changeFilter} />
          </>
        )}

        {filterContacts.length > 0 ? (
          <Contacts
            contacts={filterContacts}
            onClickDelete={this.removeContact}
          />
        ) : (
          <Notification
            message={
              contacts.length > 0
                ? 'There is no match'
                : 'Your phonebook is empty'
            }
          />
        )}
      </Section>
    );
  }
}
