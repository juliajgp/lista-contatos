import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteContact } from '../store/reducers/contactSlice';
import ContactItem from './ContactItem';

const ContactListContainer = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.data);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactListContainer>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={handleDeleteContact}
        />
      ))}
    </ContactListContainer>
  );
};

export default ContactList;