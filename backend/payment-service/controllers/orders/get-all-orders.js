import DB from "../../database/dbHelper.js";

const getAllOrders = async (req, res) => {
  try {
    const result = await DB.executeProcedure("getAllOrders");
    if (result.recordset.length > 0) {
      console.log("Hello");
      res.status(200).json({ orders: result.recordset });
    }else{
      res.status(400).json({ message: "Orders not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default getAllOrders;
