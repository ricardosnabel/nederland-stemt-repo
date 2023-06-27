import React, { useState } from 'react';
import Subject from '../Subject/Subject.js';
import VoteData from '../../data/VoteData';

function Home() {
    const subjects = [{name: "Drinken", description: "Iedereen heeft altijd een mening over welke drankjes het lekkerste is. Dit zal eens en voor al verleden tijd zijn!"},
                      {name: "Eten", description: "Wat gaat het vanavond worden?"},
                      {name: "Vrije Tijd", description: "Waar haal je de tijd vandaan joh?!"},
                      {name: "Films", description: "Gezelmozzarel op de bank!"}];

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
                {subjects.map((subject, index) => (
                <li key={index}>
                    <VoteData subjectname={subject.name} subjectdescription={subject.description}/>
                </li>
            ))}
            </div>
        </div>
    );
}

export default Home;