import Jwt from "jsonwebtoken";
import DB from "../database/dbHelper.js";
import bcrypt from "bcryptjs";

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password) return res.status(400).json({message: "Please provide an email and password"})

    const result = await DB.executeProcedure("getUserByEmail", { email });
    const user = result.recordset[0];
    console.log(user)
    if (!user) {
      return res
        .status(404)
        .json({ message: "The user with the provided email not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });
    const token = Jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.log(error);
  }
};

export default userLogin;
