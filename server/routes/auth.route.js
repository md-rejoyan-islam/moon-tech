import express from "express";
import {
  userLogin,
  userLogout,
  userRegister,
} from "../controllers/auth.controller.js";
import { isLoggedIn, isLoggedOut } from "../middlewares/verify.js";

const authRouter = express.Router();

authRouter.route("/login").post(isLoggedOut, userLogin);
authRouter.route("/register").post(isLoggedOut, userRegister);
authRouter.route("/logout").post(isLoggedIn, userLogout);

// export default router
export default authRouter;
