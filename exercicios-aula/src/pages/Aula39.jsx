import { createContext, useContext, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const PreferencesContext = createContext();

const lightTheme = {
  body: '#f0f0f0',
  text: '#333',
  buttonBackground: '#333',
  buttonText: '#f0f0f0',
  buttonHover: '#555',
};

const darkTheme = {
  body: '#333',
  text: '#f0f0f0',
  buttonBackground: '#f0f0f0',
  buttonText: '#333',
  buttonHover: '#ccc',
};

const Aula39 = () => {
  const [language, setLanguage] = useState('pt-BR');
  const [theme, setTheme] = useState('light');

  const updateLanguage = (newLanguage) => setLanguage(newLanguage);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <PreferencesContext.Provider value={{ language, theme, updateLanguage, toggleTheme }}>
        <Container>
          <Content>
            <h1>Context App</h1>
            <LanguageSelector />
            <ThemeSelector />
            <DisplayText />
          </Content>
        </Container>
      </PreferencesContext.Provider>
    </ThemeProvider>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  max-width: 600px;
  padding: 20px;
  text-align: center;
`;

const LanguageSelector = () => {
  const { language, updateLanguage } = useContext(PreferencesContext);

  const handleChangeLanguage = (e) => {
    updateLanguage(e.target.value);
  };

  return (
    <div>
      <h3>Escolha o Idioma:</h3>
      <Select value={language} onChange={handleChangeLanguage}>
        <option value="pt-BR">Português-BR</option>
        <option value="en">Inglês</option>
        <option value="it">Italiano</option>
        <option value="fr">Francês</option>
      </Select>
    </div>
  );
};

const Select = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ThemeSelector = () => {
  const { theme, toggleTheme } = useContext(PreferencesContext);

  return (
    <div>
      <h3>Escolha o Tema:</h3>
      <ThemeButton onClick={toggleTheme}>
        Alternar Tema ({theme === 'light' ? 'Escuro' : 'Claro'})
      </ThemeButton>
    </div>
  );
};

const ThemeButton = styled.button`
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonText};
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.buttonHover};
  }
`;

const DisplayText = () => {
  const { language } = useContext(PreferencesContext);

  let text = '';

  switch (language) {
    case 'pt-BR':
      text = 'Olá! Esta é a versão em português.';
      break;
    case 'en':
      text = 'Hello! This is the English version.';
      break;
    case 'it':
      text = 'Ciao! Questa è la versione italiana.';
      break;
    case 'fr':
      text = 'Bonjour! Voici la version française.';
      break;
    default:
      text = 'Idioma não suportado.';
  }

  return (
    <div>
      <h2>Texto Exibido</h2>
      <p>{text}</p>
    </div>
  );
};

export default Aula39;