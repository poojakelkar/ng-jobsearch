import "./App.css";
import { LandingPage, Error, Dashboard, Register } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path='landing' element={<LandingPage />}></Route>
                <Route path='register' element={<Register />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
            <ToastContainer position='top-center' />
        </BrowserRouter>
    );
}

export default App;
