import express from "express";
import proxy from "express-http-proxy";
import dotenv from "dotenv";
dotenv.config();
import redis from "redis";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const redisClient = redis.createClient();
redisClient.connect();

redisClient.on("connect", () => {
  console.log("Redis connected");
});

app.use(
  "/products",
  proxy("http://localhost:5002", {
    proxyReqPathResolver: function (req) {
      return "/api/v1/products/get-all-products";
    },
    userResDecorator: function (proxyRes, proxyResData, userReq, userRes) {
      return proxyResData;
    },
  })
);
app.use(
  "/users",
  proxy("http://localhost:5001", {
    proxyReqPathResolver: function (req) {
      return "/api/v1/users/get-all-users";
    },
    userResDecorator: function (proxyRes, proxyResData, userReq, userRes) {
      return proxyResData;
    },
  })
);
app.use("/", (req, res) => {
  res.status(200).send("Api Gateway is up and running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
