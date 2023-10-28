import DB from "../../database/dbHelper.js";

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "Provide the blog id" });

    const result = await DB.executeProcedure("deleteBlog", { id });
    if (result.rowsAffected[0] === 0)
      return res
        .status(404)
        .json({ message: "Blog not found , hence not deleted" });
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default deleteBlog;
