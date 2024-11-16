import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addContact, updateContact } from '../store/reducers/contactSlice';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  background-color: #e91e63; // Rosa
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const ContactForm = ({ contact, onClose }) => {
  const [name, setName] = useState(contact?.name || '');
  const [email, setEmail] = useState(contact?.email || '');
  const [phone, setPhone] = useState(contact?.phone || '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contact) {
      dispatch(updateContact({ id: contact.id, name, email, phone }));
    } else {
      dispatch(addContact({ name, email, phone }));
    }

    onClose();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome Completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Button type="submit">{contact ? 'Atualizar' : 'Adicionar'}</Button>
    </FormContainer>
  );
};

export default ContactForm;