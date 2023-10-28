import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./config/db-connection.js";
import userRouter from "./routes/user-routes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/users", userRouter);
app.use("/", (req, res) => {
  res.status(200).send("User service is up and running!");
});

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server is running on port ${PORT}`);
});
