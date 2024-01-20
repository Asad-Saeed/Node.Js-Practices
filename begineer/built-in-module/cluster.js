const cluster = require("node:cluster");
const http = require("node:http");
// check how many worker we can create on own cpu
const os = require("node:os");
// pm2 npm package do the same thing
console.log(os.cpus().length)

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);
  // at leaset create two clusters
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker process ${process.pid} is started`);
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home page");
    } else if (req.url === "/slow-page") {
      for (
        let i = 0;
        i < 6000000;
        i++ // Simulate CPU work
      )
        res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow Page");
    }
  });
  server.listen(8000, () => console.log("Server is running on port 8000"));
}
