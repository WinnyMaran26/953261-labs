# 953261 Lab 1 — First Node.js Server

| | |
|---|---|
| **Name** | MURANZHAXIANGWENG |
| **Nickname** | MURANZHAXIANGWENG |
| **Student ID** | 692115512 |
| **Section** | 701 |

## How to run

```bash
cd lab01
npm start
```

Then open <http://localhost:3000> and <http://localhost:3000/api/me>.

To check the routes from another terminal:

```bash
curl -i http://localhost:3000/api/me
curl -i http://localhost:3000/nope
```

The first URL should return 200 and JSON. The second should return 404 and HTML.

## What I learned today

When I enter a URL, the browser finds the server and sends an HTTP request for a path. The Node.js server checks the request and returns a status code, content type and response body. The browser then uses the response to display the page or data.

## AI-use statement

ChatGPT was used to generate the initial route implementation and draft this README. I will review and be able to explain the code before submitting it.

## Before submission

Review the code and make sure you can explain it to the TA. On your GitHub account `WinnyMaran26`, create an empty public repository named `953261-labs`, then push this course repository to it. Submit the repository URL on Mango.
