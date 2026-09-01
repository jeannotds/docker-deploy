import { db } from "../database/db.js";

export const getUsers = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM users ORDER BY ìd ASC");
    res.status(200).json(result);
  } catch (err) {
    console.error("Erreur GET users: ", err);

    res.status(500).json({
      message: "Erreur lors de la récupération des utilisateurs",
    });
  }
};

// POST /users
export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "name et email sont obligatoires",
      });
    }

    const result = await db.query(
      `
      INSERT INTO users (name, email)
      VALUES ($1, $2)
      RETURNING *;
      `,
      [name, email],
    );

    res.status(201).json({
      message: "Utilisateur créé avec succès",
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Erreur POST users:", error);

    if (error.code === "23505") {
      return res.status(409).json({
        message: "Cet email existe déjà",
      });
    }

    res.status(500).json({
      message: "Erreur lors de la création de l'utilisateur",
    });
  }
};
