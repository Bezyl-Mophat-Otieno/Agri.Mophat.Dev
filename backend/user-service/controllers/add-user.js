import mssql from "mssql";
import { v4 } from "uuid";
import bcrypt from "bcryptjs";
import DB from "../database/dbHelper.js";

const addUser = async (req, res) => {
  try {
    const id = v4();
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const data = {
      id,
      username,
      email,
      password: hashedPassword,
    };

    const result = await DB.executeProcedure("addUser", data);
    if (result.rowsAffected[0] === 0) {
      return res.status(400).json({ message: "User not created" });
    } else {
      return res.status(201).json({ message: "User created successfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export default addUser;
