import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import LogIn from "./pages/LogIn";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />}></Route>
                    <Route path="/auth/sign-up" element={<SignUp />}></Route>
                    <Route path="/auth/login" element={<LogIn />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
