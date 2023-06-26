import React, { useState } from 'react';
import Votings from '../../components/Votings';

function Subject() {
    const shownSubjects = [{name: "Cola", shown: false}, {name: "Water", shown: false}, {name: "Bier", shown: false},];
    const colaBrands = [{name: "Coca", count: 0}, {name: "Pepsi", count: 0}, {name: "Dr Pepper", count: 0},];
    const waterBrands = [{name: "Spa", count: 0}, {name: "Evian", count: 0}, {name: "Chaudfontaine", count: 0}, {name: "Huismerk", count: 0}, {name: "Kraan", count: 0}];
    const beerBrands = [{name: "Heineken", count: 0}, {name: "Hertog Jan", count: 0}, {name: "Brand", count: 0}, {name: "Amstel", count: 0}, {name: "Jupiler", count: 0}, {name: "Grolsch", count: 0}];

    const [isShown, setIsShown] = useState(shownSubjects);
    const [selectedOption, setSelectedOption] = useState('');
    const [voteCountCola, setVoteCountCola] = useState(colaBrands);
    const [voteCountWater, setVoteCountWater] = useState(waterBrands);
    const [voteCountBeer, setVoteCountBeer] = useState(beerBrands);

    function handleClick(event){
        console.log(isShown);
        setIsShown(
            isShown.map((show) =>
                event.target.name === show.name
                    ? { ...show, shown: true}
                    : { ...show, shown: false}
            )
        );
    }

    function handleEvent(event){
        setSelectedOption(event.target.name);
    }

    return (
        <div id="subjectitems">
        <h3>Drinken</h3>
        <p>Iedereen heeft altijd een mening over welke drankjes het lekkerste is. Dit zal eens en voor al verleden tijd zijn!</p>
        <br></br>
        <ul>
            {isShown.map((show, index) => (
                <li key={index}>
                    <button onClick={handleClick} name={show.name}>{show.name}</button>
                    {show.shown && (<Votings 
                                    selectedOption={selectedOption}
                                    handleEvent={handleEvent}
                                    voteCount={show.name === "Cola" ? voteCountCola : show.name === "Water" ? voteCountWater : voteCountBeer}
                                    setVoteCount={show.name === "Cola" ? setVoteCountCola : show.name === "Water" ? setVoteCountWater : setVoteCountBeer}/>)}
                </li>
            ))}
        </ul>
    </div>
    );
}

// Onderwerpen: Eten, Drinken, Wonen, Vrije tijd en Films

export default Subject;