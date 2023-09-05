import { getConnection } from "../database/database";
import bcrypt from "bcrypt";

const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Generar un hash de la contraseña antes de almacenarla
        const saltRounds = 10; // Número de rondas de hashing
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        
        const con = await getConnection();
        const query = `
            INSERT INTO bettracker.users (username, password)
            VALUES (?, ?)
        `;
        await con.query(query, [username, hashedPassword]);

        res.status(200).json({ message: "Usuario creado nashe." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const con = await getConnection();
      const query = `
        SELECT username, password FROM bettracker.users
        WHERE username = ?
      `;
      const [user] = await con.query(query, [username]);
  
      if (!user) {
        return res.status(401).json({ error: "Usuario no encontrado" });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: "Contraseña incorrecta" });
      }
  
      // Aquí puedes generar un JWT y enviarlo al cliente si el inicio de sesión es exitoso.
  
      res.status(200).json({ message: "Inicio de sesión exitoso" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

export const methods = {
    createUser,
    loginUser
};