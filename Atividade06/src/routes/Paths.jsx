import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "../pages/LogIn";
import User from "../pages/User";
import Stream from "../pages/Stream";
import PageLayout from "../layouts/PageLayout";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<LogIn />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/stream" element={<Stream />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;