// 953261 Lab 1 — My first Node.js server
// Run:  npm start   then open http://localhost:3000
//
import http from "node:http";

const PORT = 3000;
const profile = {
  name: "MURANZHAXIANGWENG",
  studentId: "692115512",
  favouriteLanguage: "Java",
};

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<h1>Hello, ${profile.name}!</h1><p>Student ID: ${profile.studentId}</p>`);
    return;
  }

  if (req.method === "GET" && req.url === "/api/me") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(profile));
    return;
  }

  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1>404 Not Found</h1><p>This page does not exist.</p>");
});

server.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));
