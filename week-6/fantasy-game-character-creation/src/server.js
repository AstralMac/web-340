const http = require("http");
const url = require("url");

function startServer() {
  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (req.method === "POST" && pathname === "/create-character") {
      let body = "";
      req.on("data", chunk => {
        body += chunk.toString();
      });

      req.on("end", () => {
        const params = new URLSearchParams(body);
        const character = {
          class: params.get("class"),
          gender: params.get("gender"),
          funFact: params.get("funFact")
        };
        // Simulating saving character data
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(character));
      });
    } else if (req.method === "POST" && pathname === "/confirm-character") {
      // Handle confirming character creation
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Character creation confirmed");
    } else if (req.method === "GET" && pathname === "/view-character") {
      // Handle viewing the created character (simulated data for now)
      const character = {
        class: "Warrior",
        gender: "Male",
        funFact: "Loves to sing"
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page not found");
    }
  });

  const port = 3000;
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

  return server;
}

module.exports = startServer;
