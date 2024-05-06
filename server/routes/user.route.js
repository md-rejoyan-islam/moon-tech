import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUserById,
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/verify.js";
import { authorization } from "../middlewares/authorization.js";

const userRouter = express.Router();

userRouter.use(isLoggedIn);

userRouter.route("/").get(authorization("admin"), getAllUsers);
userRouter.route("/:id").get(getUserById).patch(updateUserById);

// export default router
export default userRouter;
