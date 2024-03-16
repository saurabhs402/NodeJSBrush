const http = require("http");
const fs = require("fs").promises;

// Using async await

async function Server() {
  const html = await fs.readFile("./index.html", "utf-8");

  console.log(html + "outside server function");

  const server = http.createServer(function (req, res) {
    //res.end("hello world hii");
    //   res.end("<h1>hello world hii</h1>"); //html response
    //console.log(html);
    res.writeHead(200, { "Content-Type" : "text/html" });
    res.end(html, "utf-8");
    //res.end("hello");
    console.log("A new request is received");
  });

  server.on("error", function (err) {
    console.log(err);
  });

  server.listen(4000, "localhost", function () {
    console.log("Server started");
  });
}
Server();

// Using Promises
// fs.readFile("./index.html", "utf-8").then(function (html) {
//   console.log(html + "\npromise");

//   const server = http.createServer(function (req, res) {
//     //res.end("hello world hii");
//     //   res.end("<h1>hello world hii</h1>"); //html response

//     res.end(html);
//     //res.end("hello");
//     console.log("A new request is received");
//   });

//   server.on("error", function (err) {
//     console.log(err);
//   });

//   server.listen(4000, "localhost", function () {
//     console.log("Server started");
//   });
// });
