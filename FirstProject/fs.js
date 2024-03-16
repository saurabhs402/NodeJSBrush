const fs=require('fs'); // return object and we are assigning it to fs

let textIN=fs.readFileSync("./text.txt","utf-8");
console.log(textIN);

fs.writeFileSync("./output.txt","Hello what's up");


