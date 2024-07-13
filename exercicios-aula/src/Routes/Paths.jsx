import { BrowserRouter, Routes, Route} from "react-router-dom";
import Aula35 from "../pages/Aula35";
import Aula37 from "../pages/Aula37";
import PageLayout from "../layouts/PageLayout";

const Paths = () =>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageLayout/>}>
            <Route index element ={<Aula35/>}/>
            <Route path="/aula37" element ={<Aula37/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default Paths;