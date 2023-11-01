import DB from "../../database/dbHelper.js";

const cancelOrder = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ message: "Invalid request , Provide all the details" });
    }

    const data = {
      id,
      status: "cancelled",
    };

    const result = await DB.executeProcedure("updateOrder", data);
    if (result.rowsAffected[0] === 0) {
      return res
        .status(400)
        .json({ message: "Order not found , hence cannot be cancelled" });
    }
    if (result.rowsAffected.length > 0) {
      res.status(200).json({ message: "Order cancelled successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }  
};

export default cancelOrder;
