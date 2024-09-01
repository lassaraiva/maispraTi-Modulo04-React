import { useState } from 'react'; // Importa o hook useState do React
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import { Container, Title, Input, Button, ResultsContainer, ErrorMessage } from './IPAddressFinderStyles'; // Importa os componentes estilizados

// Componente principal IPAddressFinder
const IPAddressFinder = () => {
  const [ip, setIp] = useState(''); // Define o estado para o IP digitado pelo usuário
  const [ipData, setIpData] = useState(null); // Define o estado para armazenar os dados do IP
  const [error, setError] = useState(''); // Define o estado para armazenar mensagens de erro

  // Função para buscar os dados do IP
  const findIP = async () => {
    try {
      const url = `https://ipinfo.io/${ip}/json`;
      const response = await axios.get(url); // Faz uma requisição GET para a API ipinfo.io
      if (response.data.error) {
        // Verifica se a resposta contém um erro
        setError('IP address not found.'); // Define a mensagem de erro se o IP não for encontrado
        setIpData(null); // Limpa os dados do IP
      } else {
        setIpData(response.data); // Armazena os dados da resposta no estado ipData
        setError(''); // Limpa a mensagem de erro
      }
    } catch (error) {
      console.error("Error fetching IP address data:", error); // Exibe um erro no console em caso de falha
      setError('Unable to find the IP address you entered.'); // Define uma mensagem de erro genérica
      setIpData(null); // Limpa os dados do IP em caso de erro
    }
  };

  return (
    <Container>
      <Title>IP Address Finder</Title>
      <Input
        type="text"
        value={ip} // Valor do campo de entrada é ligado ao estado ip
        onChange={(e) => setIp(e.target.value)} // Atualiza o estado ip conforme o usuário digita
        placeholder="Enter IP address" // Placeholder do campo de entrada
      />
      <Button onClick={findIP}>Find IP</Button> {/* Botão que chama a função findIP quando clicado */}
      {error && <ErrorMessage>{error}</ErrorMessage>} {/* Exibe a mensagem de erro se existir */}
      {ipData && ( // Condicional que exibe os dados do IP se ipData não for null
        <ResultsContainer>
        {/* Validação e exibição do IP */}
        <p><strong>IP:</strong> {ipData.ip ? ipData.ip : 'IP data not available'}</p>
        
        {/* Validação e exibição da localização (cidade, região e país) */}
        <p><strong>Location:</strong> 
          {ipData.city && ipData.region && ipData.country 
            ? `${ipData.city}, ${ipData.region}, ${ipData.country}` 
            : 'Location data not available'}
        </p>
        
        {/* Validação e exibição do ISP (Provedor de Serviço de Internet) */}
        <p><strong>ISP:</strong> {ipData.org ? ipData.org : 'ISP data not available'}</p>
      </ResultsContainer>
      )}
    </Container>
  );
};

export default IPAddressFinder; // Exporta o componente IPAddressFinder como padrão