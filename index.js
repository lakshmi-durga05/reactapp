console.log("Hello from Node.js!");

const os = require("os");
console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());

const http = require("http");
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World from Node.js HTTP server!");
}).listen(8080, () => {
  console.log("HTTP server running at http://localhost:8080");
});

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Node.js with Express!");
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
