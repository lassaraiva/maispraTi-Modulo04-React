import { useState } from "react";
import { FaQrcode, FaSearch, FaTasks, FaRegQuestionCircle, FaGlobeAmericas, FaNetworkWired, FaBars } from 'react-icons/fa';
import { NavBarContainer, NavBarToggle, StyledLink, LogoutButton } from "./NavBarStyles";

const NavBar = ({ handleAccess, handleLogout }) => {

  // Estado para controlar se a NavBar está aberta ou fechada.
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  // Função para alternar o estado da NavBar.
  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  return (
    <>
      {/* Ícone de menu para dispositivos móveis */}
      <NavBarToggle onClick={toggleNavBar}>
        <FaBars size={24} color="#2C3E50" />
      </NavBarToggle>
      <NavBarContainer isOpen={isNavBarOpen}>
        <StyledLink onClick={() => handleAccess(0, "QRCodeGenerator")}>
          <FaQrcode />
          QR Code Generator
        </StyledLink>
        <StyledLink onClick={() => handleAccess(1, "IPAddressFinder")}>
          <FaNetworkWired />
          IP Address Finder
        </StyledLink>
        <StyledLink onClick={() => handleAccess(2, "MovieSearchEngine")}>
          <FaSearch />
          Movie Search
        </StyledLink>
        <StyledLink onClick={() => handleAccess(3, "TodoApp")}>
          <FaTasks />
          Todo App
        </StyledLink>
        <StyledLink onClick={() => handleAccess(4, "QuizApp")}>
          <FaRegQuestionCircle />
          Quiz App
        </StyledLink>
        <StyledLink onClick={() => handleAccess(5, "LanguageTranslator")}>
          <FaGlobeAmericas />
          Translator
        </StyledLink>
        <LogoutButton
          onClick={handleLogout} >
          Logout
        </LogoutButton>
      </NavBarContainer>
    </>
  );
}

export default NavBar