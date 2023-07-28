const express = require("express");
const server = express();
const { conn } = require("./DB_connection");
const PORT = 3001;

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
  });
});
