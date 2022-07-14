import "./App.css";
import { LandingPage, Error, Register, ProtectedRoute } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    Profile,
    AddJobs,
    Stats,
    AllJobs,
    SharedLayout,
} from "./pages/dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <ProtectedRoute>
                            <SharedLayout />
                        </ProtectedRoute>
                    }>
                    <Route index element={<Stats />} />
                    <Route path='all-jobs' element={<AllJobs />} />
                    <Route path='add-jobs' element={<AddJobs />} />
                    <Route path='profile' element={<Profile />} />
                </Route>
                <Route path='landing' element={<LandingPage />}></Route>
                <Route path='register' element={<Register />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
            <ToastContainer position='top-center' />
        </BrowserRouter>
    );
}

export default App;
