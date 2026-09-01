import pg from "pg";
import dotenv from "dotenv";

const environment = process.env.NODE_ENV || "local";

const envFile = environment === "docker" ? ".env.docker" : ".env.local";

dotenv.config({
  path: envFile,
});

console.log("📄 Fichier chargé :", envFile);

const { Client } = pg;

export const db = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
