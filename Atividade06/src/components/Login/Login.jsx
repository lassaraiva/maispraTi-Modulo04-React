import { useState, useEffect } from 'react';
import { Wrapper, Container, Title, Input, CustomCheckbox, Error, ButtonIn, ButtonCode, Por, Pnew, Anew, Aforgot, Precaptcha, Arecaptcha, DivLeft, Remember } from './LoginStyles';
import { VscError } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import Background from '../../assets/img/background.jpg';

function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [userErrorMessage, setUserErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background})`;
        document.body.style.backgroundSize = 'cover';

        return () => {
            document.body.style.background = '';
            document.body.style.backgroundSize = '';
        };
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted'); // Depuração

        if (!user || !password) {
            setUserErrorMessage('Informe um email ou número de telefone válido.');
            setPasswordErrorMessage('A senha deve ter entre 4 e 60 caracteres.');
        } else if (user !== "meu.user@email.com") {
            setUserErrorMessage('Usuário incorreto.');
        } else if (password !== "atividade06") {
            setPasswordErrorMessage('Senha incorreta.');
        } else {
            console.log('Redirecting to /user'); // Depuração
            navigate('/user');
        }
    }

    const validateUser = () => {
        const emailOrPhoneRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$|^[0-9]{10,15}$/;
        if (!emailOrPhoneRegex.test(user)) {
            setUserErrorMessage('Informe um email ou número de telefone válido.');
        } else {
            setUserErrorMessage('');
        }
    }

    const validatePassword = () => {
        if (password.length < 4 || password.length > 60) {
            setPasswordErrorMessage('A senha deve ter entre 4 e 60 caracteres.');
        } else {
            setPasswordErrorMessage('');
        }
    }

    const handleClick = () => {
        setShowMessage(true);
    }

    return (
        <Wrapper>
            <Container>
                <Title>Entrar</Title>
                <form onSubmit={handleSubmit}>
                    <Input type="text" placeholder="Email ou número de celular"
                        value={user} onChange={(event) => setUser(event.target.value)}
                        onBlur={validateUser}
                        style={{
                            borderColor: userErrorMessage ? 'red' : 'initial',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                        }} />
                    {userErrorMessage && <Error><VscError /> {userErrorMessage}</Error>}
                    <br />
                    <Input type="password" placeholder="Senha"
                        value={password} onChange={(event) => setPassword(event.target.value)}
                        onBlur={validatePassword}
                        style={{
                            borderColor: passwordErrorMessage ? 'red' : 'initial',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                        }} />
                    {passwordErrorMessage && <Error><VscError /> {passwordErrorMessage}</Error>}
                    <br />
                    <ButtonIn type="submit">Entrar</ButtonIn>
                    <Por>OU</Por>
                    <ButtonCode>Usar um código de acesso</ButtonCode>
                    <br />
                    <Aforgot href="#">Esqueceu a senha?</Aforgot>
                    <br />
                    <DivLeft>
                        <Remember><CustomCheckbox type="checkbox" id="remember" name="remember" /> Lembre-se de mim</Remember>
                        <Pnew>Novo por aqui?<Anew id="novo" href="#"><strong> Assine agora</strong></Anew></Pnew>
                        <Precaptcha>Essa página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.
                            {!showMessage ? (
                                <Arecaptcha href="#" onClick={handleClick}> Saiba mais.</Arecaptcha>
                            ) : (
                                <Precaptcha>As informações recolhidas pelo Google reCAPTCHA estão sujeitas à <Arecaptcha href='#'>Política de Privacidade</Arecaptcha> e <Arecaptcha href='#'>Termos de Uso</Arecaptcha>, e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google).</Precaptcha>
                            )} </Precaptcha>
                    </DivLeft>
                </form>
            </Container>
        </Wrapper>
    )
}

export default Login;