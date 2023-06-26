const Register = () => {
    return (
        <div>
            <form>
                <label>Voornaam</label>
                <input type="text"></input>
                <label>Achternaam</label>
                <input type="text"></input>
                <label>E-mailadres</label>
                <input type="email"></input>
                <label>Wachtwoord</label>
                <input type="password"></input>
                <button>Registreer</button>
            </form>
        </div>
    );

};

// Bevat een formulier waarbij een mailadres/gebruikersnaam, wachtwoord en naam ingevuld moet worden.

export default Register;