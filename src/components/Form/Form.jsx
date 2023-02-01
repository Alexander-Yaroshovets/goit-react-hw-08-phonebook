import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addContact } from 'redux/contacts/contactsOperations';

import { selectContacts } from 'redux/contacts/contactsSelectors';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  ContactForm,
  FormInput,
  FormLabel,
  FormTitle,
  FormButton,
} from './Form.styled';

export const Form = ({ title }) => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const [name, setname] = useState('');
  const [number, setnumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      name,
      number,
    };
    dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setname('');
    setnumber('');
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setname(value);
        break;
      case 'number':
        setnumber(value);
        break;
      default:
        return;
    }

    contacts &&
      contacts.find(contact => {
        if (contact.name.toLowerCase() === value.toLowerCase()) {
          Notify.failure(`Contact ${value}, olredy in contacts`);
        }
        switch (name) {
          case 'name':
            setname(value);
            break;
          case 'number':
            setnumber(value);
            break;
          default:
        }
        return name;
      });
  };

  return (
    <>
      <FormTitle>{title}</FormTitle>
      <ContactForm onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChange}
          />
        </FormLabel>

        <FormLabel>
          Number
          <FormInput
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChange}
          />
        </FormLabel>

        <FormButton type="submit">add contact</FormButton>
      </ContactForm>
    </>
  );
};
