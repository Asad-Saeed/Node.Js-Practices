const http = require("node:http");
const fs = require("node:fs");

const AboutMe = {
  firstName: "Asad",
  lastName: "Saeed",
  designation: "Software Engineer",
};

// const port=http.createServer((req,res)=>{
// PLAIN
// res.writeHead(200,{"Content-Type":"text/plain"});
// res.write('Hello World!');
// JSON
// res.writeHead(200,{"Content-Type":"application/json"});
// res.write(req.url)
// res.end(JSON.stringify(AboutMe))
// HTML
// res.writeHead(200,{"Content-Type":"text/html"});
// res.end("<h1>Asad Saeed Here!</h1>")
// fs.createReadStream(__dirname+"/http.html").pipe(res)
// DYNAMIC HTML TAPLATE
// const name="Asad Saeed"
// res.writeHead(200,{"Content-Type":"text/html"});
// let file=fs.readFileSync("./http.html","utf-8")
// file = file.replace(/{{name}}/g, name);
// res.end(file)
// })

// HTTP ROUTING
const port = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page!");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page!");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(AboutMe));
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});
const portNumber = 8000;
port.listen(portNumber, () => {
  console.log(`Server run on port ${portNumber}`);
});
