const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Version 2 avec Docker 234 !");
});

app.listen(port, () => {
  console.log(`Application démarrée sur le port ${port}`);
});
