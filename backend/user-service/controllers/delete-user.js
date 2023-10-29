import DB from "../database/dbHelper.js";

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "Please provide an ID" });
    const result = await DB.executeProcedure("deleteUser", { id });
    if (result.rowsAffected.length > 0) {
      return res.status(200).json({ message: "User deleted successfully" });
    }
    return res.status(404).json({ message: "User not deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default deleteUser;
