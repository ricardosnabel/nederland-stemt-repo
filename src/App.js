import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import CreateSubject from './pages/CreateSubject/CreateSubject.js';
import About from './pages/About/About.js';
import Login from './pages/Login/Login.js';
import Signup from './pages/Signup/Signup.js';
import Navbar from './components/Navbar.js';
import './assets/styles/styles.css';

function App() {

    const [isloggedin, setIsloggedin] = useState({email: "", islogged: false});

    return (
    <BrowserRouter>
        <Navbar isloggedin={isloggedin}/>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/createsubject" element={<CreateSubject />}></Route>
            <Route path="/login" element={<Login setIsloggedin={setIsloggedin}/>}></Route>
            <Route path="/signup" element={<Signup />}></Route>
        </Routes>
    </BrowserRouter>
    );
}

export default App;
