// 953261 Lab 1 — My first Node.js server
// Run:  npm start   then open http://localhost:3000
//
import http from "node:http";

const PORT = 3000;
const profile = {
  name: "Muran",
  studentId: "REPLACE_WITH_YOUR_STUDENT_ID",
  favouriteLanguage: "JavaScript",
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

  // TODO: replace this with a proper 404 response
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Not done yet");
});

server.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));
