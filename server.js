
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/clube'))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/clube/index.html");
});

app.listen(PORT, () => {
  console.log('Servidor rodando na port : ' + PORT)
});
