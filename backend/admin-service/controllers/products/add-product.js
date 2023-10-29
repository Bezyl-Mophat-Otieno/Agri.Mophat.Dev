import DB from "../../database/dbHelper.js";
import { v4 } from "uuid";

const addProduct = async (req, res) => {
  try {
    const id = v4();
    const { name, description, price } = req.body;
    if (!name || !description || !price) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const data = {
      id,
      name,
      description,
      price,
    };

    const result = await DB.executeProcedure("addProduct", data);
    if (result.rowsAffected[0] === 1) {
      return res.status(201).json({ message: "Product added successfully" });
    } else {
      return res.status(400).json({ message: "Product was not added" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export default addProduct;
