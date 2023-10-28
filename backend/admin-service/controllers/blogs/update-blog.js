import DB from "../../database/dbHelper.js";

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "Provide the blog id" });

    const result = await DB.executeProcedure("updateBlog", { id, ...req.body });
    if (result.rowsAffected[0] === 0)
      return res
        .status(404)
        .json({ message: "Blog not found , hence not updated" });

    return res.status(200).json({ message: "Blog updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default updateBlog;
