import { useEffect } from 'react';
import { Container, Title, Options, Ul, Li, Span, Img, Button, CustomButton } from './UserStyles';
import ProfileRed from '../../assets/img/profileRed.png'
import { RiAddCircleFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


const Users = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/stream');
    };

    useEffect(() => {
        document.body.style.backgroundColor = '#141414';

        return () => {
            document.body.style.backgroundColor = '';
        }
    }, []);

    return (
        <Container>
            <Title>Quem está assistindo?</Title>
            <Options>
                <Ul>
                    <Li><a onClick={() => handleClick()}><Img src={ProfileRed}/></a><Span>Kids</Span></Li>
                    <Li><Button><RiAddCircleFill color='#808080' /></Button><Span>Adicionar perfil</Span></Li>
                </Ul>
            </Options>
            <CustomButton>Gerenciar Perfis</CustomButton>
        </Container>
    )
}

export default Users;