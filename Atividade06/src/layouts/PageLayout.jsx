import HeaderSwitcher from '../components/Header/HeaderSwitcher';
import Footer from "../components/Footer/Footer"
import { Outlet } from "react-router-dom";

const PageLayout = () =>{
    return (
        <>
         <HeaderSwitcher />
         <Outlet/>
         <Footer/>
        </>
    );
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
export default PageLayout;