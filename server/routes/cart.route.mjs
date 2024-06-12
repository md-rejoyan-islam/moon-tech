import express from "express";
import {
  addProductToCart,
  getAllCartProducts,
  removeProductFromCart,
} from "../controllers/cart.controller";

const cartRouter = express.Router();

cartRouter.route("/").get(getAllCartProducts).post(addProductToCart);

cartRouter.route("/:id([0-9a-fA-F]{24})").delete(removeProductFromCart);

export default cartRouter;
