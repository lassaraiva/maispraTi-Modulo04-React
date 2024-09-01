import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Estiliza a barra de navegação.
export const NavBarContainer = styled.div`
  width: 240px;
  background-color: #2c3e50;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 3px 0 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

// Estiliza o ícone de toggle (hamburger) para abrir/fechar a NavBar.
export const NavBarToggle = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Estiliza os links na barra de navegação.
export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #34495e;
    color: #ecf0f1;
  }
`;

//Estiliza o botão de Logout
export const LogoutButton = styled.button`
    margin-top: 20px;
    color: white;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;