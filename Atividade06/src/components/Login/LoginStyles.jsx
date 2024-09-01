import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.75);
    width: 400px;
    height: 740px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px;
    border-radius: 5px;
    margin-top: 20px;

    @media (max-width: 760px) {
        width: 350px;
    }
`;

export const Title = styled.h2`
    color: white;
    margin-bottom: 20px;
    text-align: left;
    width: 100%;
    margin-left: 60px;
    font-size: 2rem;
`;

export const Input = styled.input`
    margin: 10px;
    width: 300px;
    border-radius: 5px;
    height: 55px;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    background-color: rgba(34, 33, 33, 0.671);
    padding: 1px;
    color: white;
    font-size: 1rem;
    padding-left: 20px;

    &:focus {
        outline: 2px solid white;
    }

    @media (max-width: 760px) {
        width: 250px;
    }
`;

export const CustomCheckbox = styled.input`
    transform: scale(1.5);
    margin: 5px;

    &:hover {
        cursor: pointer;
    }

    &:checked {
        background-color: white;
        color: black;
    }
`;

export const Error = styled.p`
    color: #E50914;
    font-size: 0.8em;
    font-weight: 600;
`;

export const ButtonIn = styled.button`
    margin: 10px;
    padding: 5px;
    height: 40px;
    width: 330px;
    border: none;
    border-radius: 5px;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    color: white;
    font-size: 1em;
    background-color: #E50914;

    &:hover {
        cursor: pointer;
        background-color: #d10812;
    }

    @media (max-width: 760px) {
        width: 250px;
    }
`;

export const ButtonCode = styled.button`
    margin: 10px;
    padding: 5px;
    height: 40px;
    width: 330px;
    border: none;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    border-radius: 5px;
    color: white;
    font-size: 1em;
    background-color: #8c8c8c70;
    margin-bottom: 20px;

    &:hover {
        cursor: pointer;
        background-color: #7272726f;
    }

    @media (max-width: 760px) {
        width: 250px;
    }
`;

export const Por = styled.p`
    color: #8C8C8C;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
`;

export const Pnew = styled.p`
    color: #8C8C8C;
    margin-left: 40px;
`;

export const Anew = styled.a`
    text-decoration: none;
    color: white;

    &:hover {
        border-bottom: 1px solid white;
    }
`;

export const Aforgot = styled.a`
    text-align: center;
    text-decoration: none;
    color: white;

    &:hover {
        border-bottom: 1px solid #8C8C8C;
        color: #8C8C8C;
    }
`;

export const Precaptcha = styled.p`
    color: #8C8C8C;
    margin-top: 20px;
    font-size: 0.9em;
    margin-left: 40px;
`;

export const Arecaptcha = styled.a`
    text-decoration: none;
    color: #1071DE;

    &:visited {
    color: #1071DE;
    }

    &:hover {
        border-bottom: 1px solid #1071DE;
    }
`;

export const DivLeft = styled.div`
    text-align: left;
`;

export const Remember = styled.p`
    margin-left: 40px;
    margin-top: 20px;
    text-align: left;
    margin-bottom: 25px;
    color: white;
`;