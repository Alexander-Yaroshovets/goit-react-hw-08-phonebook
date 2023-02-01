import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { deleteContact } from 'redux/contacts/contactsOperations';

import { selectContacts, selectFilter } from 'redux/contacts/contactsSelectors';

import { fetchContacts } from 'redux/contacts/contactsOperations';

import {
  ContactButton,
  Transaction,
  TransactionHead,
  TransactionBody,
  Table,
  TableHead,
  InfoText,
} from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const filterValue = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilterdContact = () => {
    const normalizedFilter = filterValue.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  const filteredContacts = getFilterdContact();

  return contacts.length > 0 ? (
    <Transaction>
      <TransactionHead>
        <tr>
          <TableHead>Name</TableHead>
          <TableHead>Number</TableHead>
          <TableHead>Delete Contact</TableHead>
        </tr>
      </TransactionHead>

      {filteredContacts.map(({ id, name, number }) => (
        <TransactionBody>
          <tr key={id}>
            <Table>{name}</Table>
            <Table>{number}</Table>
            <Table>
              <ContactButton
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                delete
              </ContactButton>
            </Table>
          </tr>
        </TransactionBody>
      ))}
    </Transaction>
  ) : (
    <InfoText>You Phonebook is empty</InfoText>
  );
};
