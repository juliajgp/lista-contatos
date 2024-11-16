import React, { useState } from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';

const ContactItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

const ContactInfo = styled.div`
  /* Estilos para as informações de contato */
`;

const ContactActions = styled.div`
  /* Estilos para os botões de ação */
`;

const Button = styled.button`
  background-color: #e91e63; // Rosa
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 5px;
`;

const ContactItem = ({ contact, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  return (
    <ContactItemContainer>
      {isEditing ? (
        <ContactForm contact={contact} onClose={handleCloseEdit} />
      ) : (
        <>
          <ContactInfo>
            {contact.name} - {contact.email} - {contact.phone}
          </ContactInfo>
          <ContactActions>
            <Button onClick={handleEdit}>Editar</Button>
            <Button onClick={() => onDelete(contact.id)}>Excluir</Button>
          </ContactActions>
        </>
      )}
    </ContactItemContainer>
  );
};

export default ContactItem;