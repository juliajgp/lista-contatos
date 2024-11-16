import React, { useState } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { store } from './store/store';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

const AppContainer = styled.div`
  text-align: center;
  background-color: #fce4ec; // Rosa claro
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: #282c34;
`;

const Header = styled.header`
  background-color: #f8bbd0; // Rosa médio
  padding: 20px;
  width: 100%;
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5em;
`;

const Button = styled.button`
  background-color: #e91e63; // Rosa
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 20px;
`;

const App = () => {
  const [isAddingContact, setIsAddingContact] = useState(false);

  const handleAddContact = () => {
    setIsAddingContact(true);
  };

  const handleCloseAddContact = () => {
    setIsAddingContact(false);
  };

  return (
    <Provider store={store}>
      <AppContainer>
        <Header>
          <Title>Lista de Contatos</Title>
        </Header>
        <main>
          <ContactList />
          {isAddingContact && (
            <ContactForm onClose={handleCloseAddContact} />
          )}
          <Button onClick={handleAddContact}>Adicionar Contato</Button>
        </main>
      </AppContainer>
    </Provider>
  );
};

export default App;