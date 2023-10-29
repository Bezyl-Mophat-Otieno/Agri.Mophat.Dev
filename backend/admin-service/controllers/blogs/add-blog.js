import DB from "../../database/dbHelper.js";
import { v4 } from "uuid";

const addBlog = async (req, res) => {
  try {
    const id = v4();

    const { title, content } = req.body;
    if (!title || !content)
      return res.status(400).json({ message: "Missing required fields" });
    const result = await DB.executeProcedure("addBlog", { id, title, content });

    if (result.rowsAffected[0] === 0)
      return res
        .status(400)
        .json({ message: "Blog not added" });
    res.status(201).json({ message: "Blog added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default addBlog;
