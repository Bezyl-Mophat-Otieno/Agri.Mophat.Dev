import { Router } from "express";
import createOrder from "../controllers/orders/create-order.js";
import getAllOrders from "../controllers/orders/get-all-orders.js";
import getSingleOrder from "../controllers/orders/get-single-order.js";
import updateOrder from "../controllers/orders/update-orders.js";
import cancelOrder from "../controllers/orders/cancl-order.js";
const orderRouter = Router();

orderRouter.post("/create-order", createOrder);
orderRouter.get("/all-orders", getAllOrders);
orderRouter.get("/single-order/:id", getSingleOrder);
orderRouter.put("/update-order/:id", updateOrder);
orderRouter.put("/cancel-order/:id", cancelOrder);
export default orderRouter;
