import addUser from "../controllers/add-user.js";
import userLogin from "../controllers/login-user.js";
import getAllUsers from "../controllers/getAllUsers.js";
import updateUser from "../controllers/update-user.js";
import deleteUser from "../controllers/delete-user.js";

import Router from "express";
const userRouter = Router();

userRouter.post("/add-user", addUser);
userRouter.post("/login", userLogin);
userRouter.get("/get-all-users", getAllUsers);
userRouter.put("/update-user/:id", updateUser);
userRouter.delete("/delete-user/:id", deleteUser);

export default userRouter;
