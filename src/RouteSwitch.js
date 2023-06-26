import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;