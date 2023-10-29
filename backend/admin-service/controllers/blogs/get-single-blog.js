import DB from "../../database/dbHelper.js";

const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "Provide the blog id" });

    const result = await DB.executeProcedure("getSingleBlog", {
      id,
      ...req.body,
    });
    console.log(result.recordset.length);
    if (result.recordset.length === 0) {
      res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({
      message: "Blog fetched successfully",
      blog: result.recordset[0],
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default getSingleBlog;
