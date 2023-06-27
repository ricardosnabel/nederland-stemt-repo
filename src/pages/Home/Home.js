import React from 'react';
import Subject from '../Subject/Subject.js';

function Home() {


    return (
        <div id="container">
            <div id="content">
                <div id="title">
                    <h1>Welkom bij Nederland Stemt!</h1>
                    <p>Welkom op Nederland Stemt! De stem pagina van het land!<br></br>
                    Klik op een onderwerp om een stem uit te brengen.
                    </p>
                </div>
                <h2 id="subjectheader">Onderwerpen</h2>
                <Subject />
            </div>
        </div>
    );
}

export default Home;