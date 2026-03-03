import * as http from "node:http";

const server = http.createServer((request, response) => {
  if (request.url == "/ping") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify({ message: "pong" }));
    return;
  }

  response.statusCode = 404;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify({ error: "Not Found" }));
});

server.listen(3000, () => console.log("http://localhost:3000"));
