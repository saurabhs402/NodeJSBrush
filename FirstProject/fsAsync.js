const fs = require("fs").promises;

// fs.readFile("./text.txt", "utf-8", callback);
// function callback(err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// }

// // instead of using callback we acan use promise or Async

// let mPromise = new Promise(function (resolve, reject) {
//   fs.readFile("./text.txt", "utf-8", (err, data) => {
//     if (err) reject(err);
//     else resolve(data + " promise");
//   });
// });

// mPromise.then(
//   function (data) {
//     console.log(data);
//   },
//   function (err) {
//     console.log(err);
//   }
// );

async function read() {
  //   let mPromise = new Promise(function (resolve, reject) {
  //     fs.readFile("./text.txt", "utf-8", (err, data) => {
  //       if (err) resolve(err);
  //       else resolve(data + " async");
  //     });
  //   });

  //   let val = await mPromise;
  //   console.log(val);

  val = await fs.readFile("./text.txt", "utf-8");
  console.log(val + "using readFile returning promise");
}

read();

console.log();
