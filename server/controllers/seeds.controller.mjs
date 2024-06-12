import asyncHandler from "express-async-handler";
import productModel from "../models/product.model.js";

import productSeedData from "../data/product.seeds.mjs";
import { successResponse } from "../helpers/responseHandler.js";

// producr seeds controller

export const getAllSeedsProducts = asyncHandler(async (req, res) => {
  await productModel.deleteMany();

  // create products
  const prodcuts = await productModel.create(productSeedData);

  // resposnse send
  successResponse(res, {
    statusCode: 200,
    message: "Products created",
    payload: {
      data: prodcuts,
    },
  });
});
