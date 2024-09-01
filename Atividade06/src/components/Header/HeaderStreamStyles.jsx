import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    width: 100%;
    background: transparent;
    transition: all ease 0.5s;
    ${({ black }) => black && `
        background-color: #141414;
    `}
`;

export const Logo = styled.div`
    height: 30px;
    display: block;
    float: left;
    margin-top: 15px;
    margin-left: 20px;
`;

export const LogoImg = styled.img`
    height: 100%;
`;

export const User = styled.div`
    height: 35px;
    float: right;
    margin-top: 15px;
    margin-right: 30px;
`;

export const UserImg = styled.img`
    height: 100%;
    display: block;
    border-radius: 3px;
`;


export const SearchContainer = styled.div`
    float: right;
    margin-top: 15px;
    margin-right: 30px;
    position: relative;
`;

export const SearchInput = styled.input`
    width: ${({ visible }) => (visible ? '200px' : '0')};
    height: 30px;
    padding: ${({ visible }) => (visible ? '0 10px' : '0')};
    border: none;
    border-radius: 4px;
    outline: none;
    transition: width 0.3s ease, padding 0.3s ease;
    opacity: ${({ visible }) => (visible ? '1' : '0')};
    background-color: #333;
    color: white;
`;

export const Menu = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    font-weight: 700;
    align-items: center;
    height: 100%;
    float: left;
`;

export const MenuItem = styled.li`
    margin: 0 15px;
    font-size: 18px;
    color: white;
    cursor: pointer;
    position: relative;
    padding: 5px 0;

    &:hover {
        color: #e50914;
    }
`;

export const SearchResults = styled.div`
    background-color: #333; 
    color: #fff; 
    border-radius: 8px;
    padding: 10px;
    position: absolute;
    top: 40px; 
    left: 0;
    width: 100%;
    max-height: 300px;
    overflow-y: auto; 
    z-index: 1000;
`;

export const ModalItem = styled.div`
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #555; 
    }
`;