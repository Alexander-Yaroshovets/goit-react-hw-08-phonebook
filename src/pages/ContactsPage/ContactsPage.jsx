import { Form } from '../../components/Form/Form';

import { Contacts } from '../../components/Contacts/Contacts';

import { Filter } from '../../components/Filter/Filter';

export default function ContactsPage() {
  return (
    <>
      <Form title="Phonebook" />
      <Filter />
      <Contacts title="MyContacts" />
    </>
  );
}
