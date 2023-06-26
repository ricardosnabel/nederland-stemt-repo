import React, { useState } from "react";


function Cola(props){

    const [isShown, setIsShown] = useState(false);
    const [cocaCount, setCocaCount] = useState(0);
    const [pepsiCount, setPepsiCount] = useState(0);
    const [drPepperCount, setDrPepperCount] = useState(0);



    function countUpCola(item){
        if (item == "coca"){
            setCocaCount(cocaCount+1);
        }
        else if (item == "pepsi"){
            setPepsiCount(pepsiCount+1);
        }
        else if (item == "drpepper"){
            setDrPepperCount(drPepperCount+1);
        }
    }

    const handleClick = event => {
        setIsShown(true);
    };

    return (
        <div>
            <label>Cola</label>
            {!isShown && (
                <div>
                    <label>
                        <input type="radio" name="Cola" value="coca" checked={props.selectedOption === "coca"} onChange={props.handleEvent}/>
                        Coca cola
                    </label>
                    <label>
                        <input type="radio" name="Cola" value="pepsi" checked={props.selectedOption === "pepsi"} onChange={props.handleEvent}/>
                        Pepsi cola
                    </label>
                    <label>
                        <input type="radio" name="Cola" value="drpepper" checked={props.selectedOption === "drpepper"} onChange={props.handleEvent}/>
                        Dr. Pepper
                    </label>
                    <br></br>
                    <button onClick={function(event){countUpCola(props.selectedOption); handleClick();}}>Stem!</button>
                </div>
            )}
            {isShown && 
                (<p>
                    Resultaten:
                    <br></br>
                    Coca cola: {cocaCount}<br></br>
                    Pepsi cola: {pepsiCount}<br></br>
                    Dr. Pepper: {drPepperCount}
                </p>)}
        </div>
    );
}

// 

export default Cola;
