import express from "express";
import {
  bulkDeleteBrandByIds,
  createBrand,
  deleteBrandById,
  getAllBrand,
  getBrandById,
  updateBrandById,
} from "../controllers/brand.controller.js";
import { isLoggedIn } from "../middlewares/verify.js";

//create router
const brandRouter = express.Router();

brandRouter
  .route("/")
  .get(getAllBrand)
  .post(
    isLoggedIn,
    authorization("admin"),
    brandCreateValidator,
    runValidation,
    createBrand
  );

// bulk delete
brandRouter
  .route("/bulk-delete")
  .delete(isLoggedIn, authorization("admin"), bulkDeleteBrandByIds);

brandRouter
  .route("/:id([0-9a-fA-F]{24})")
  .get(isLoggedIn, authorization("admin"), getBrandById)
  .delete(isLoggedIn, authorization("admin"), deleteBrandById)
  .patch(isLoggedIn, authorization("admin"), updateBrandById);

//export
export default brandRouter;
