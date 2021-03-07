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
// const validator = require("validator");
// console.log(validator.isEmail("daniel@gmail.com"))
// console.log(validator.isEmail("@gmail.com"))

// console.log(validator.isURL("gmailcom"));
// console.log(validator.isURL("youtube.com"));
//====================================================
// const chalk = require("chalk");
// const log = console.log;
// console.log()
// log(chalk.green.bold("Success!"))
// log(chalk.green("Success!"))
// log(chalk.red.inverse("Success!"))


//====================================================
// console.log(process.argv[2]);

//====================================================
// const chalk = require("chalk");
// const getNotes = require("./notes");

// const command = process.argv[2];

// if(command === "add"){
//     console.log("added a note!")
// }



//====================================================
const chalk = require("chalk");
const getNotes = require("./notes");
const yargs = require("yargs");

//customize yargs version
yargs.version("1.1.0");

// create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    handler: function () {
        console.log("adding a new note");
    }
})

// create remove command
yargs.command({
    command: "remove",
    describe: "removing a note",
    handler: function () {
        console.log("removing a note");
    }
})

yargs.command({
    command: "list",
    describe: "listing notes",
    handler: function () {
        console.log("notes listed");
    }
})

yargs.command({
    command: "read",
    describe: "reading a note",
    handler: function () {
        console.log("reading a note");
    }
})




// console.log(process.argv);
console.log(yargs.argv);

