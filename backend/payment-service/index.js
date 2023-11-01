import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./config/db-connection.js";
import orderRouter from "./routes/order-router.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/orders", orderRouter);
// app.use("/", (req, res) => {
//   res.status(200).send("Payments service is up and running!");
// });
const PORT = process.env.PORT || 5003;

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server running on port ${PORT}`);
});
