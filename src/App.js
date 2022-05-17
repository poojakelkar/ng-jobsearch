import "./App.css";
import { LandingPage, Error, Dashboard, Register } from "./pages";
import { BrowserRouter, routes, route, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path='landing' element={<LandingPage />}></Route>
                <Route path='register' element={<Register />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
