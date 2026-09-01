import express from "express";
import { client } from "./app/database/db.js";
const app = express();

const port = process.env.PORT || 3000;
console.log("process.env.PORT : ", process.env.PORT);

async function startServer() {
  try {
    await client.connect();

    console.log("✅ Connecté à PostgreSQL !");

    // Test de la connexion
    const result = await client.query("SELECT NOW()");
    console.log("📅 Heure PostgreSQL :", result.rows[0]);

    app.get("/", (req, res) => {
      res.send("Version 2 avec Docker Compose !");
    });

    app.listen(port, () => {
      console.log(`Application démarrée sur le port ${port}`);
    });
  } catch (err) {
    console.log("❌ Erreur de connexion à PostgreSQL : ", err.message);
  }
}

await startServer();
