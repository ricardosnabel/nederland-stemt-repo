import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Navbar from './components/Navbar';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;