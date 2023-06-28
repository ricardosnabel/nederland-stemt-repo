import React, { useState } from "react";

function SignupForm(){
    const [userInfo, setUserInfo] = useState({firstname: "", lastname: "", email: "", password: "", isloggedin: false});
    let firstName;
    let lastName;
    let email;
    let password;

    function handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setUserInfo({...userInfo, [name]: value});
    }

    function handleSubmit(e) {
        console.log(userInfo)
        localStorage.setItem(userInfo.email, userInfo);
    }

    return (
        <div id="containercard">
            <h2 id="containerheader">Registratieformulier</h2>
            <form onSubmit={handleSubmit}>
                <labal>Voornaam</labal>
                <input
                    value={firstName}
                    onChange={handleChange}
                    placeholder="Jan"
                    type="text"
                    name="firstname"
                    required
                />
                <label>Achternaam</label>
                <input
                    value={lastName}
                    onChange={handleChange}
                    placeholder="Smit"
                    type="text"
                    name="lastname"
                    required
                />
                <labal>E-mailadres</labal>
                <input
                    value={email}
                    onChange={handleChange}
                    placeholder="voornaam@achternaam.nl"
                    type="email"
                    name="email"
                    required
                />
                <label>Wachtwoord</label>
                <input
                    value={password}
                    onChange={handleChange}
                    placeholder="************"
                    type="password"
                    name="password"
                    required
                />
                <button type="submit">Registreer</button>
            </form>
        </div>
    );

}

export default SignupForm;