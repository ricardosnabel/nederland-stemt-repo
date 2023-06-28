import React, { useState } from "react";

function CreateSubjectForm() {

    const [subjectInfo, setSubjectInfo] = useState({subjectid: 1, subject: "", categorie: "", vote1: "", vote2: "", vote3: ""});
    let subject;
    let categorie;
    let vote1;
    let vote2;
    let vote3;

    function handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setSubjectInfo({...subjectInfo, [name]: value});
    }

    function handleSubmit() {
        setSubjectInfo({...subjectInfo, subjectid: subjectInfo.subjectid + 1});
        localStorage.setItem(subjectInfo.subjectid, subjectInfo);
    }

    return (
        <div id="containercard">
            <h2 id="containerheader">Creeër Stemming</h2>
            <form method="post" onSubmit={handleSubmit}>
                <label>Onderwerp</label>
                <input
                    value={subject}
                    onChange={handleChange}
                    placeholder="Drinken"
                    type="text"
                    name="subject"
                    required
                />
                <label>Categorie</label>
                <input
                    value={categorie}
                    onChange={handleChange}
                    placeholder="Water"
                    type="text"
                    name="categorie"
                    required
                />
                <label>Stem 1</label>
                <input
                    value={vote1}
                    onChange={handleChange}
                    placeholder="Kraanwater"
                    type="text"
                    name="vote1"
                    required
                />
                <label>Stem 2</label>
                <input
                    value={vote2}
                    onChange={handleChange}
                    placeholder="Spa"
                    type="text"
                    name="vote2"
                    required
                />
                <label>Stem 3</label>
                <input
                    value={vote3}
                    onChange={handleChange}
                    placeholder="Sloot water"
                    type="text"
                    name="vote3"
                    required
                />
                <button type="submit">Creeër Stemming!</button>
            </form>
        </div>
    );

}

export default CreateSubjectForm;