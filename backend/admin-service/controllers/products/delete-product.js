import DB from "../../database/dbHelper.js";

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "Please provide the ID" });

    const result = await DB.executeProcedure("deleteProduct", { id });
    console.log(result);
    if (result.rowsAffected[0] > 0) {
      return res.status(200).json({ message: "Product deleted successfully" });
    } else {
      return res.status(400).json({ message: "Product not deleted" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export default deleteProduct;
