import DB from "../../database/dbHelper.js";

const getAllProduct = async (req, res) => {
  try {
    const result = await DB.executeProcedure("getAllProducts");
    if (result.recordset[0].length === 0)
      return res.status(404).json({ message: "No products found" });
    return res.status(200).json({ products: result.recordset });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export default getAllProduct;
