const express = require("express");

const app = express();

const port = process.env.PORT || 3000;
console.log("process.env.PORT : ", process.env.PORT);

app.get("/", (req, res) => {
  res.send("Version 2 avec Docker Compose !");
});

app.listen(port, () => {
  console.log(`Application démarrée sur le port ${port}`);
});
