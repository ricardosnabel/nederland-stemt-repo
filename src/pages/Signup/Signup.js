import SignupForm from "../../components/form/SignupForm";

function Signup() {
    return (
        <div id="container">
            <div id="content">
                <div id="title">
                    <h1>Maak een account!</h1>
                </div>
                <SignupForm />
            </div>
        </div>
    );

};

// Bevat een formulier waarbij een mailadres/gebruikersnaam, wachtwoord en naam ingevuld moet worden.

export default Signup;