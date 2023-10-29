import DB from "../../database/dbHelper.js";

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "Product id is required" }); 

    const result = await DB.executeProcedure("updateProduct", {
      id,
      ...req.body,
    });
    if (result.rowsAffected[0] > 0) {
      return res.status(200).json({ message: "Product updated successfully" });
    } else return res.status(400).json({ message: "Product not updated" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export default updateProduct;
