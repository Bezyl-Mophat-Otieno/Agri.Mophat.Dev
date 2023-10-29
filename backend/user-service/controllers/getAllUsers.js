import DB from "../database/dbHelper.js";
const getAllUsers = async (req, res) => {
  try {
    const result = await DB.executeProcedure("getAllUsers");
    if (result.recordset.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res
      .status(200)
      .json({ message: "Users found", users: result.recordset });
  } catch (error) {
    console.log(error);
  }
};

export default getAllUsers;
