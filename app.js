const fs = require("fs");

// fs.writeFileSync("notes.txt", "This file was created by node..");

fs.appendFileSync("notes.txt", "\n This is message two.");