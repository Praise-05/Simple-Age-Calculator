const prompt = require("prompt sync")(); 

let a = parseInt(prompt("Insert birth year"));
let b = parseInt(prompt("Insert current year"));

function subtraction() {
    return b - a;
}

console.log(subtraction());