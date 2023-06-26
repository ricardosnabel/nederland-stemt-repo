import React, { useState } from "react";


function Votings(props){
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        props.setVoteCount(
            props.voteCount.map((brand) =>
                props.selectedOption === brand.name
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
                    {props.voteCount.map((brand, index) => (
                        <label key={index}>
                            <input type="radio" name={brand.name} checked={props.selectedOption === brand.name} onChange={props.handleEvent}/>
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
                    {props.voteCount.map((brand, index) => (
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
