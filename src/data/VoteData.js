import React, { useState, useEffect, useMemo, useCallback } from "react";
import Subject from "../pages/Subject/Subject";


function VoteData({subjectname, subjectdescription}){
    const colaBrands = [{name: "Coca", count: 0}, {name: "Pepsi", count: 0}, {name: "Dr Pepper", count: 0},];
    const waterBrands = [{name: "Spa", count: 0}, {name: "Evian", count: 0}, {name: "Chaudfontaine", count: 0}, {name: "Huismerk", count: 0}, {name: "Kraan", count: 0}];
    const beerBrands = [{name: "Heineken", count: 0}, {name: "Hertog Jan", count: 0}, {name: "Brand", count: 0}, {name: "Amstel", count: 0}, {name: "Jupiler", count: 0}, {name: "Grolsch", count: 0}];

    const candyBrands = [{name: "Zure Matten", count: 0}, {name: "Engelse Drop", count: 0}, {name: "Kauwgom", count: 0}, {name: "Chocola", count: 0}];
    const fruits = [{name: "Appel", count: 0}, {name: "Banaan", count: 0}, {name: "Watermeloen", count: 0}, {name: "Aardbei", count: 0}, {name: "Ananas", count: 0}];
    const pizzas = [{name: "Margerita", count: 0}, {name: "Pepperoni", count: 0}, {name: "Salami", count: 0}, {name: "Calzone", count: 0}, {name: "Quattro Formaggi", count: 0}, {name: "Quattro Stagioni", count: 0}];

    const [drinkCategories, setDrinkCategories] = useState([{name: "Cola", data: colaBrands}, {name: "Water", data: waterBrands}, {name: "Bier", data: beerBrands}]);
    const [foodCategories, setFoodCategories] = useState([{name: "Snoep", data: candyBrands}, {name: "Fruit", data: fruits}, {name: "Pizza's", data: pizzas}]);

    const [voteCount, setVoteCount] = useState([]);
    const [isShown, setIsShown] = useState([]);
    const memiozedData = useMemo(() => setData(), [subjectname]);

    function setData() {
        subjectname === "Drinken" 
            ? drinkCategories.map((item) => {
                setIsShown(isShown => [...isShown, {name: item.name, shown: false}])
            })
            : foodCategories.map((item) => {
                setIsShown(isShown => [...isShown, {name: item.name, shown: false}])
            })
    }

    function handleClick(event){
        setIsShown(
            isShown.map((show) =>
                event.target.name === show.name
                    ? { ...show, shown: true} 
                    : { ...show, shown: false}
        ));
        if (subjectname === "Drinken"){
            drinkCategories.map((item) => {
                if (event.target.name === item.name) {
                    setVoteCount(item.data)
                }
            })
        } else {
            foodCategories.map((item) => {
                if (event.target.name === item.name) {
                    setVoteCount(item.data)
                }
            })
        }
    }

    return(
        <div id="subjectitems">
            <h3>{subjectname}</h3>
            <p>{subjectdescription}</p>
            {console.log(voteCount)}
            <Subject setData={memiozedData} isShown={isShown} voteCount={voteCount} setVoteCount={setVoteCount} handleClick={handleClick}/>
        </div>
    );
}

export default VoteData;