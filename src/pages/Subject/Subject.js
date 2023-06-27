import React, { useState, useEffect, useMemo} from 'react';
import Votings from '../../components/Votings';

function Subject({isShown, voteCount, setVoteCount, handleClick}) {
    const [selectedOption, setSelectedOption] = useState('');

    function handleEvent(event){
        setSelectedOption(event.target.name);
    }

    return (
        <>
            <ul>
            
            {isShown.map((show, index) => (
                <li key={index}>
                    <button onClick={handleClick} name={show.name}>{show.name}</button>
                    {show.shown && (<Votings 
                                    selectedOption={selectedOption}
                                    handleEvent={handleEvent}
                                    voteCount={voteCount}
                                    setVoteCount={setVoteCount}/>)}
                </li>
            ))}
            </ul>
        </>
    );
}

// Onderwerpen: Eten, Drinken, Wonen, Vrije tijd en Films

export default Subject;