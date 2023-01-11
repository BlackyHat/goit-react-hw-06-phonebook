import { useState, useEffect } from 'react';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/FilterContacts';
import ContactList from 'components/ContactList';
import initialContacts from './contact.json';

export default function Phonebook() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // try {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
    // } catch (error) {
    // console.log(error.message);
    // }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    checkDouble(newContact)
      ? alert(`${newContact.name} is already exist in contacts`)
      : setContacts([newContact, ...contacts]);
  };

  const deleteContact = delContactId => {
    setContacts(contacts.filter(({ id }) => id !== delContactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const checkDouble = newContact => {
    return contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );
  };

  const getFilteredContacts = () => {
    const normaliziedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normaliziedFilter)
    );
  };

  const filteredContactsList = getFilteredContacts();
  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onInput={changeFilter} />
        {filteredContactsList.length > 0 && (
          <ContactList
            contacts={filteredContactsList}
            onDeleteContact={deleteContact}
          />
        )}
      </Section>
    </>
  );
}
