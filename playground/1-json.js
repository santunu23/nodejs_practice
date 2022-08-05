const fs=require('fs');
const { getSystemErrorMap } = require('util');
// const book={
//     title:'Ego is the Enemy',
//     author:'Ryan Holiday'
// }
// console.log("Raw JSON DATA "+ book);
// const bookJSON=JSON.stringify(book);
// console.log("After using JSON.stringify "+bookJSON)
// const bookJSONparse=JSON.parse(bookJSON);
// console.log("After using JSON parse "+bookJSONparse.author)

// fs.writeFileSync('1-json.json',bookJSON);

// const dataBuffer=fs.readFileSync('1-json.json');
// const dataJSON=dataBuffer.toString();
// const data=JSON.parse(dataJSON);
// console.log(data.title);

// Challenge: Work with JSON and the file getSystemErrorMap.
// 1. Load and parse the JSON data.
// 2. Change the name and age property using yur info.
// 3. Stringify the changed object and overwrite the origitnal data.
// 4. Test your work by viewing data in the JSON file.

const dataBuffer =fs.readFileSync('1-json.json');
const dataJSON= dataBuffer.toString();
console.log(dataJSON);
const user= JSON.parse(dataJSON)
console.log(user);
user.name="Goutam",
user.age=38
const userJSON=JSON.stringify(user)
 fs.writeFileSync('1-json.json',userJSON);
