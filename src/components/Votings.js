import React, { useState } from "react";


function Votings({selectedOption, handleEvent, voteCount, setVoteCount}){
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setVoteCount(
            voteCount.map((brand) =>
                selectedOption === brand.name
                    ? { ...brand, count: brand.count + 1}
                    : { ...brand}
            )
        );
        setIsShown(true);
    };

    return (
        <div>
            {!isShown && (
                <div>
                    {voteCount.map((brand, index) => (
                        <label key={index}>
                            <input type="radio" name={brand.name} checked={selectedOption === brand.name} onChange={handleEvent}/>
                            {brand.name}
                        </label>
                    ))}
                    
                    <br></br>
                    <button onClick={handleClick}>Stem!</button>
                </div>
            )}
            {isShown && 
                (<p>
                    Resultaten:
                    <ul>
                    {voteCount.map((brand, index) => (
                        <label key={index}>
                            {brand.name}: {brand.count}
                        </label>
                    ))}
                    </ul>
                </p>)}
        </div>
    );
}

export default Votings;
