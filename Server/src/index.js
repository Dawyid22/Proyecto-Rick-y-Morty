const http = require("http");
const data = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").at(-1);
      const searchId = data.find((char) => char.id === +id);
      res
        .writeHead(200, { "content-type": "aplication/json" })
        .end(JSON.stringify(searchId));
    }
  })
  .listen(3001);
