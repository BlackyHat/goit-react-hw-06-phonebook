import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/FilterContacts';
import ContactList from 'components/ContactList';
import { ButtonTheme } from 'components/ButtonTheme/ButtonTheme';

export default function Phonebook() {
  const { contacts } = useSelector(getContacts);

  return (
    <>
      <ButtonTheme />
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {contacts?.length > 0 && <ContactList />}
      </Section>
    </>
  );
}
