import DB from "../../database/dbHelper.js";

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ message: "Invalid request , Provide all the details" });
    }

    const result = await DB.executeProcedure("updateOrder", {
      id,
      ...req.body,
    });
    if (result.rowsAffected.length > 0) {
      res
        .status(200)
        .json({ message: "Order information updated successfully" });
    } else {
      res.status(400).json({ message: "Order not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default updateOrder;
