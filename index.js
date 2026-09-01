import express from "express";
import pg from "pg";

const { Client } = pg;

const app = express();

const port = process.env.PORT || 3000;
console.log("process.env.PORT : ", process.env.PORT);

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

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
