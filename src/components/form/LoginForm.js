import React, { useState } from "react";

function LoginForm({setIsloggedin}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let loginError = false;

    function handleSubmit(e){
        let userLogin = localStorage.getItem(email);
        if (userLogin.password === password){
            setIsloggedin({email: userLogin.email, islogged: true});
        } else {
            loginError = true;
        }
    }

    return (
        <div id="containercard">
            <h2 id="containerheader">Login</h2>
            <form onSubmit={handleSubmit}>
                <label>E-mailadres</label>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="voornaam@achternaam.nl"
                    type="email"
                    name="email"
                    required
                />
                <label>Wachtwoord</label>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="************"
                    type="password"
                    name="password"
                    required
                />
                <button type="submit">Log in</button>
            </form>
            {loginError && <>Er is iets misgegaan!</>}
        </div>
    );
}

export default LoginForm;