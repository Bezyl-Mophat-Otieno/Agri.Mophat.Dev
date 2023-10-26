import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./config/db-connection.js";
import productRouter from "./routes/product-routes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/products", productRouter);
const PORT = process.env.PORT || 5002;

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server running on port ${PORT}`);
});
