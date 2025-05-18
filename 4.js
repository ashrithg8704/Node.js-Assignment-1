/*
4. Create and Read File

Task:
1.write "Learning Node.js" into message.txt.
2.Then read and log the content to console.

Hint:
Use the fs module:
1.fs.writeFileSync("message.txt", "Learning Node.js") to write.
2.const data = fs.readFileSync("message.txt", "utf-8") to read.
3.Print the data using console.log(data).

*/

import fs from 'fs';

fs.writeFileSync("message.txt", "Learning Node.js");

const data = fs.readFileSync("message.txt", "utf-8");

console.log(data);