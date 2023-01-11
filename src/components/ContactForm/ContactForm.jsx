import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormBetter } from './ContactForm.styled';
import { BsPersonPlus } from 'react-icons/bs';
import { nanoid } from 'nanoid';

const schemaAddContact = Yup.object().shape({
  name: Yup.string().min(4).max(32).required(),
  number: Yup.string().min(4).max(9).required(),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    const formdata = values;
    onSubmit({ id: nanoid(), ...formdata });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemaAddContact}
      onSubmit={handleSubmit}
    >
      <FormBetter>
        <label>
          Name
          <Field
            type="text"
            name="name"
            required
            autoComplete="false"
            placeholder="input your name"
          />
          <ErrorMessage component="div" name="name" />
        </label>
        <label>
          Number
          <Field
            type="tel"
            name="number"
            required
            placeholder="input your number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage component="div" name="number" />
        </label>
        <button type="submit">
          <BsPersonPlus size={16} />
          Add contact
        </button>
      </FormBetter>
    </Formik>
  );
}
