import NavBar from '../NavBar/NavBar';
import { AppContainer, MainContent } from './LayoutStyles';

// Componente Layout encapsula a estrutura principal do aplicativo
const Layout = ({ isAuthenticated, isNavBarOpen, toggleNavBar, handleAccess, handleLogout, children }) => (
  <AppContainer>
    {isAuthenticated && (
      <>
        {/* Exibe a NavBar e Footer se o usuário estiver autenticado */}
        <NavBar
          isOpen={isNavBarOpen}
          toggleNavBar={toggleNavBar}
          handleAccess={handleAccess}
          handleLogout={handleLogout}
        />
      </>
    )}
    {/* Área de conteúdo principal */}
    <MainContent>{children}</MainContent>
  </AppContainer>
);

export default Layout;