import * as http from "node:http";

const server = http.createServer((req, res) => {
  console.log(req.url);

  //   switch (req.url) {
  //     case "/":
  //       res.statusCode = 200;
  //       res.setHeader("Content-Type", "application/json");
  //       res.end(JSON.stringify({ message: "API Running" }));
  //       break;
  //     case "/ping":
  //       res.statusCode = 200;
  //       res.setHeader("Content-Type", "application/json");
  //       res.end(JSON.stringify({ message: "Pong" }));
  //       break;
  //   }

  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "API Running" }));
  } else if (req.url == "/ping") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Pong" }));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

server.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
