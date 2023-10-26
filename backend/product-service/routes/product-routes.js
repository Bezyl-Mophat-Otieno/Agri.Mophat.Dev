import { Router } from "express";
import addProduct from "../controllers/add-product.js";
import deleteProduct from "../controllers/delete-product.js";
import updateProduct from "../controllers/update-product.js";
import getSingleProduct from "../controllers/get-single-product.js";
import getAllProduct from "../controllers/get-all-product.js";
const productRouter = Router();

productRouter.post("/add-product", addProduct);
productRouter.delete("/delete-product/:id", deleteProduct);
productRouter.put("/update-product/:id", updateProduct);
productRouter.get("/get-single-product/:id", getSingleProduct);
productRouter.get("/get-all-products", getAllProduct);

export default productRouter;
