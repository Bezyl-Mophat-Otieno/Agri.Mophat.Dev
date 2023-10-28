import DB from "../../database/dbHelper.js";

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await DB.executeProcedure("getSingleProduct", { id });
    console.log(result.recordset);
    if (result.recordset.length === 0)
      return res.status(404).json({ message: "No products found" });
    return res.status(200).json({ product: result.recordset[0] });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
export default getSingleProduct;
