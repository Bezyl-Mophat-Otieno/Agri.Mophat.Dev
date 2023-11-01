import DB from "../../database/dbHelper.js";
import { v4 } from "uuid";

const createOrder = async (req, res) => {
  try {
    const id = v4();

    const {
      customer_id,
      customer_name,
      product_id,
      product_name,
      quantity,
      discount,
      aamount,
    } = req.body;

    if (
      !customer_id ||
      !customer_name ||
      !product_id ||
      !product_name ||
      !aamount ||
      !quantity ||
      !discount === undefined
    ) {
      return res

        .status(400)
        .json({ message: "Invalid request , Provide all the details" });
    }

    const data = {
      id,
      customer_id,
      customer_name,
      product_id,
      product_name,
      aamount,
      quantity,
      discount,
      status: "pending",
    };
    const result = await DB.executeProcedure("create_order", data);
    if (result.rowsAffected[0] > 0) {
      res.status(201).json({ message: "Order created successfully" });
    } else {
      res.status(400).json({ message: "Order creation failed" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default createOrder;
