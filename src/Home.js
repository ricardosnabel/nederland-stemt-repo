import React, { Component, useState } from 'react';
import './styles/styles.css';
import { Link } from 'react-router-dom';
import Cola from './components/Cola';

function Home() {

    const [isShown, setIsShown] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleClick = event => {
        setIsShown(current => !current);
    };

    function handleEvent(event){
        setSelectedOption(event.target.value);
    }

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
                <div id="subjectitems">
                    <h3>Drinken</h3>
                    <p>Iedereen heeft altijd een mening over welke drankjes het lekkerste is. Dit zal eens en voor al verleden tijd zijn!</p>
                    <br></br>
                    <ul>
                        <li>
                            <button onClick={handleClick}>Cola</button>
                            {isShown && (<Cola selectedOption={selectedOption} handleEvent={handleEvent} />)}
                        </li>
                        <li>
                            <Link>Water</Link>
                        </li>
                        <li>
                            <Link>Bier</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;