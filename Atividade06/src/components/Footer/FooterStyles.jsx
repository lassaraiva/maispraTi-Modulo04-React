import styled from 'styled-components';

export const DivFooter = styled.footer`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background: linear-gradient(rgba(0, 0, 0, 0.795), black);
    width: 97%;
    min-height: 20vh;
    margin-top: 70px;
    padding: 20px;
`;

export const PhoneSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 12.5%;
    margin-bottom: 20px; 
`;

export const MainSections = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
`;

export const A = styled.a`
    color: #B3B3B3;
    text-decoration:underline;
    &:hover {
        text-decoration: underline;
    }
`;

export const P = styled.p`
    color: #B3B3B3;
`;

export const Select = styled.select`
    background-color: black;
    padding: 10px;
    height: 50%;
    width: 100%;
    border-radius: 5px;
    color: white;
    border: 1px solid #B3B3B3;
`;