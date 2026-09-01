import express from "express";
import dotenv from "dotenv";
import { db } from "./app/database/db.js";
import useRoutes from "./app/routes/user.routes.js";

const app = express();

const port = process.env.PORT || 3000;
console.log("process.env.PORT : ", process.env.PORT);

app.use(express.json());

// Routes
app.use("/users", useRoutes);

async function startServer() {
  try {
    await db.connect();

    console.log("✅ Connecté à PostgreSQL !");

    // Test de la connexion
    const result = await db.query("SELECT NOW()");
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

// // Création de la table
// async function initializeDatabase() {
//   await db.query(`
//     CREATE TABLE IF NOT EXISTS users (
//       id SERIAL PRIMARY KEY,
//       name VARCHAR(100) NOT NULL,
//       email VARCHAR(150) UNIQUE NOT NULL,
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     );
//   `);

//   console.log("✅ Table users prête");
// }
