import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.js'
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Login from './pages/Login/Login.js';
import Signup from './pages/Signup/Signup.js';
import Navbar from './components/Navbar.js';

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