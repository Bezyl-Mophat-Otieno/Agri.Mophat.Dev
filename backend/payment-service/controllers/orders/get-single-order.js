import DB from "../../database/dbHelper.js";

const getSingleOrder = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ message: "Invalid request , Provide all the details" });
    }

    const result = await DB.executeProcedure("getSingleOrder", {
      customer_id: id,
    });
    if (result.recordset.length > 0) {
      res.status(200).json({
        message: "Order fetched successfully",
        customer_orders: result.recordset,
      });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default getSingleOrder;
