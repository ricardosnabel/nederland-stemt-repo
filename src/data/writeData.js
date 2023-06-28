//import * as fs from 'fs';

function writeData(data, type){
    const fs = require('fs');
    if (type === "user"){
        fs.writeFile('./userData.json', JSON.stringify(data), (err) => {
            if (err) console.log('Error writing file:', err);
        })
    } else if (type === "subject"){
        fs.writeFile('./subjectData.json', JSON.stringify(data), (err) => {
            if (err) console.log('Error writing file:', err);
        }) 
    } else {
        fs.writeFile('./unknownData.json', JSON.stringify(data), (err) => {
            if (err) console.log('Error writing file:', err);
        })
    } 
}

export default writeData;