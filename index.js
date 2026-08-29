const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  //   res.send("Bonjour depuis Docker et Nodemon !");
  res.send(
    "Bonjour ! Modification détectée automatiquement par Nodemon dans Docker 🚀",
  );
});

app.listen(port, () => {
  console.log(`Application démarrée sur le port ${port}`);
});
