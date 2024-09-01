import { useState } from 'react'; // Importa o hook useState do React
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import { Container, Title, Label, Select, Input, Button,TranslatedText, ErrorMessage } from './LanguageTranslatorStyles';

// Componente principal LanguageTranslator
const LanguageTranslator = () => {
  const [text, setText] = useState(''); // Define o estado para o texto a ser traduzido
  const [translatedText, setTranslatedText] = useState(''); // Define o estado para o texto traduzido
  const [sourceLang, setSourceLang] = useState('en'); // Define o estado para a língua de origem
  const [targetLang, setTargetLang] = useState('es'); // Define o estado para a língua de destino
  const [error, setError] = useState(''); // Define o estado para a mensagem de erro

  // Função para traduzir o texto
  const translateText = async () => {
    try {
      const response = await axios.get('https://api.mymemory.translated.net/get', {
        params: {
          q: text, // Texto a ser traduzido
          langpair: `${sourceLang}|${targetLang}`, // Par de línguas para tradução
        },
      });
      if (response.data.responseData.translatedText) {
        setTranslatedText(response.data.responseData.translatedText); // Armazena o texto traduzido no estado translatedText
        setError(''); // Limpa a mensagem de erro se a tradução for bem-sucedida
      } else {
        throw new Error('Translation failed'); // Lança um erro se a tradução falhar
      }
    } catch (error) {
      setTranslatedText(''); // Limpa o texto traduzido em caso de erro
      setError('Failed to translate the text. Please try again.'); // Define a mensagem de erro
    }
  };

  return (
    <Container>
      <Title>Language Translator</Title>
      <div>
        <Label>Source Language:</Label>
        <Select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </Select>
      </div>
      <div>
        <Label>Target Language:</Label>
        <Select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </Select>
      </div>
      <Input
        type="text"
        value={text} // Valor do campo de entrada é ligado ao estado text
        onChange={(e) => setText(e.target.value)} // Atualiza o estado text conforme o usuário digita
        placeholder="Enter text to translate" // Placeholder do campo de entrada
      />
      <Button onClick={translateText}>Translate</Button> {/* Botão que chama a função translateText quando clicado */}
      {error && <ErrorMessage>{error}</ErrorMessage>} {/* Exibe a mensagem de erro se houver */}
      {translatedText && <TranslatedText>{translatedText}</TranslatedText>} {/* Condicional que exibe o texto traduzido se translatedText não for vazio */}
    </Container>
  );
};

export default LanguageTranslator; // Exporta o componente LanguageTranslator como padrão