import Logo from '../../assets/img/logo.png';
import { LoginHeader, ImgLogo } from './HeaderStyles';

const Header = () => {
    return (
        <LoginHeader>
            <ImgLogo src={Logo} />
        </LoginHeader>
    );
};

export default Header;