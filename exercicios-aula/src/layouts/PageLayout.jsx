import Header from "../components/Header"
import { Outlet } from "react-router-dom";

const PageLayout = () =>{
    return (
        <>
         <Header/>
         <Outlet/>
        </>
    );
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
export default PageLayout;