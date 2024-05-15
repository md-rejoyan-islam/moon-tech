import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
} from "../controllers/product.controller.js";
import { productPhotoUpload } from "../utils/multerForCloudinary.js";

const productRouter = express.Router();

productRouter
  .route("/")
  .get(getAllProducts)
  .post(productPhotoUpload, createProduct);
productRouter.route("/:id([0-9a-fA-F]{24})").get(getProductById);

// export default router
export default productRouter;
