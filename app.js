// const fs = require("fs");

// // fs.writeFileSync("notes.txt", "This file was created by node..");

// fs.appendFileSync("notes.txt", "\n This is message two.");

//====================================================
// const dani = require("./utils"); 

// // const dani = "dani" 

// console.log(dani);

//====================================================
// const addition = require("./utils");

// const sum = addition(3, 6);
// console.log(sum);

//====================================================
// const getNotes = require("./notes");

// const notes = getNotes()

// console.log(notes);

//====================================================
const validator = require("validator");
console.log(validator.isEmail("daniel@gmail.com"))
console.log(validator.isEmail("@gmail.com"))



//====================================================