import LoginForm from "../../components/form/LoginForm";

function Login({isloggedin, setIsloggedin}) {
    return (
        <div id="container">
            <div id="content">
                <div id="title">
                    <h1>Login op je account!</h1>
                </div>
            <LoginForm isloggedin={isloggedin} setIsloggedin={setIsloggedin}/>
            </div>
        </div>
    );

};

// Log in pagina, bevat een titel, invultekst voor gebruikersnaam en wachtwoord en een link om te registreren

export default Login;