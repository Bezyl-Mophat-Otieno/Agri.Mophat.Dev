import DB from "../../database/dbHelper.js";

const getAllBlogs = async (req, res) => {
  try {
    const results = await DB.executeProcedure("getAllBlogs");
    if (results.recordset.length === 0)
      return res.status(404).json({ message: "No blogs found" });
    res
      .status(200)
      .json({
        message: "Blogs fetched successfully",
        blogs: results.recordset,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default getAllBlogs;