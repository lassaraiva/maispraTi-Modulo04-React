import { useState } from 'react'; // Importa o hook useState do React
import { login } from '../../services/AuthService'; // Importa a função de login do AuthService
import { LoginContainer, LoginForm, Input, Button, Error } from './LoginStyles';
// Componente principal de Login
// eslint-disable-next-line react/prop-types
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState(''); // Define o estado para o nome de usuário
  const [password, setPassword] = useState(''); // Define o estado para a senha
  const [userError, setUserError] = useState(''); //Define o estado para a mensagem de erro no campo usuário
  const [passwordError, setPasswordError] = useState(''); //Define o estado para a mensagem de erro no campo senha

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tenta autenticar usando a função login do AuthService
    const isLoggedIn = login(username, password);

    if (isLoggedIn) {
      onLogin(); // Se o login for bem-sucedido, chama a função onLogin passada como prop
    } else {
      // Se o login falhar, exibe as mensagens de erro apropriadas
      if (username !== 'admin') {
        setUserError('Incorrect username.');
      } else {
        setUserError('');
      }
      if (password !== 'password') {
        setPasswordError('Incorrect password.');
      } else {
        setPasswordError('');
      }
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}> {/* Chama a função handleSubmit quando o botão de tipo 'submit' for clicado */}
        <h2>Login</h2>
        <Input
          type="text"
          value={username} // Valor do campo de entrada é ligado ao estado username
          onChange={(e) => setUsername(e.target.value)} // Atualiza o estado username conforme o usuário digita
          placeholder="Username (admin)" // Placeholder do campo de entrada
        />
        {userError && <Error>{userError}</Error>} {/* Mostra a mensagem de erro quando nome de usuário estiver incorreto */}
        <Input
          type="password"
          value={password} // Valor do campo de entrada é ligado ao estado password
          onChange={(e) => setPassword(e.target.value)} // Atualiza o estado password conforme o usuário digita
          placeholder="Password (password)" // Placeholder do campo de entrada
        />
        {passwordError && <Error>{passwordError}</Error>} {/* Mostra a mensagem de erro quando a senha estiver incorreta */}
        <Button type="submit">Login</Button> {/* Botão que envia o formulário */}
      </LoginForm>
    </LoginContainer>
  );
};

export default Login; // Exporta o componente Login como padrão