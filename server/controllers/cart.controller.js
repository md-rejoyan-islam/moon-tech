import asyncHandler from "express-async-handler";
import {
  createProductService,
  deleteProductService,
  getAllProductCarts,
} from "../services/cart.service.mjs";

// get all carts products
export const getAllCartProducts = asyncHandler(async (req, res) => {
  // search query fields
  const searchFields = ["name", "slug", "description", "_id"];

  // default page and limit value
  req.query.page = Number(req.query.page) || 1;
  req.query.limit = Number(req.query.limit) || 10;

  const { result, pagination } = await getAllProductCarts(req, searchFields);

  // response send
  successResponse(res, {
    statusCode: 200,
    message: "All cart products data fetch successfully.",
    payload: {
      pagination,
      data: result,
    },
  });
});

// add product to cart
export const addProductToCart = asyncHandler(async (req, res) => {
  // create product
  const result = await createProductService(req.body);

  // response send
  successResponse(res, {
    statusCode: 201,
    message: "Product added to cart successfully.",
    payload: result,
  });
});

// remove product from cart
export const removeProductFromCart = asyncHandler(async (req, res) => {
  // remove product
  const result = await deleteProductService(req.params.id);

  // response send
  successResponse(res, {
    statusCode: 200,
    message: "Product removed from cart successfully.",
    payload: result,
  });
});
