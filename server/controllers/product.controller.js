import asyncHandler from "express-async-handler";
import createError from "http-errors";
import checkMongoId from "../helpers/checkMongoId.mjs";
import { successResponse } from "../helpers/responseHandler.js";
import productModel from "../models/product.model.js";
import {
  addProductToWishListService,
  deleteProductService,
  getAllProductService,
  getProductBySlugService,
  removeProductFromWishListService,
} from "../services/product.service.mjs";
import { productUploadToCloud } from "../utils/cloudinary.js";

/**
 * @description get all products
 */

export const getAllProducts = asyncHandler(async (req, res) => {
  // search query fields
  const searchFields = ["name", "slug", "title", "brand", "category", "tags"];

  // default page and limit value
  req.query.page = Number(req.query.page) || 1;
  req.query.limit = Number(req.query.limit) || 10;

  // find product data
  const { result, pagination } = await getAllProductService(req, searchFields);

  const limit = req.query.limit;
  const page = req.query.page;
  const totalPage = pagination.totalPage;
  const prevPage = pagination.previousPage;

  // links
  const links = {
    self: `/api/v1/products?limit=${limit}&page=${page}`,
    first: `/api/v1/products?limit=${limit}&page=1`,
    last: `/api/v1/products?limit=${limit}&page=${totalPage}`,
    prev: page > 1 ? `/api/v1/products?limit=${limit}&page=${prevPage}` : null,
    next:
      page < totalPage
        ? `/api/v1/products?limit=${limit}&page=${page + 1}`
        : null,
  };

  // Set Cache-Control header
  res.header("Cache-Control", "public,max-age=60");

  // response send with data
  successResponse(res, {
    statusCode: 200,
    message: "Product data fetched successfully",
    payload: {
      links,
      pagination,
      data: result,
    },
  });
});

/**
 * @description get single product by id
 */

export const getProductById = asyncHandler(async (req, res) => {
  checkMongoId(req.params.id);

  // data validation
  const result = await getProductBySlugService(req.params.id);

  successResponse(res, {
    statusCode: 200,
    message: "Product data fetched successfully.",
    payload: {
      data: result,
    },
  });
});

// delete product by id
export const deleteProductById = asyncHandler(async (req, res) => {
  checkMongoId(req.params.id);

  // find by id and delete
  const result = await deleteProductService(req.params.id);

  successResponse(res, {
    statusCode: 200,
    message: "Product data deleted successfully.",
    payload: {
      data: result,
    },
  });
});

/**
 * @description create new product
 */

export const createProduct = asyncHandler(async (req, res) => {
  const {
    processor_brand,
    processor_model,
    processor_frequency,
    processor_core,
    cpu_cache,
    display_size,
    display_type,
    display_resolutaion,
    display_features,
    ram,
    ram_type,
    storage_type,
    storage_capacity,
    graphics_model,
    graphics_memory,
    keyboard_type,
    bluetooth,
    operating_system,
    weight,
    status,
    regular_price,
    offer_price,
  } = req.body;

  if (!processor_brand)
    throw createError.NotFound("Please enter processor brand.");
  if (!processor_model)
    throw createError.NotFound("Please enter processor model.");
  if (!processor_frequency)
    throw createError.NotFound("Please enter processor frequency.");
  if (!processor_core)
    throw createError.NotFound("Please enter processor core.");
  if (!cpu_cache) throw createError.NotFound("Please enter cpu cache.");
  if (!display_size) throw createError.NotFound("Please enter display size.");
  if (!display_type) throw createError.NotFound("Please enter display type.");
  if (!display_resolutaion)
    throw createError.NotFound("Please enter display resolutaion.");
  if (!display_features)
    throw createError.NotFound("Please enter display features.");
  if (!ram) throw createError.NotFound("Please enter ram size.");
  if (!ram_type) throw createError.NotFound("Please enter ram type.");
  if (!storage_type) throw createError.NotFound("Please enter storage type.");
  if (!storage_capacity)
    throw createError.NotFound("Please enter storage capacity.");
  if (!graphics_model)
    throw createError.NotFound("Please enter graphics model.");
  if (!graphics_memory)
    throw createError.NotFound("Please enter graphics memory.");
  if (!keyboard_type) throw createError.NotFound("Please enter keyboard type.");
  if (!bluetooth) throw createError.NotFound("Please enter bluetooth version.");
  if (!operating_system)
    throw createError.NotFound("Please enter operating system name.");
  if (!weight) throw createError.NotFound("Please enter product weight.");
  if (!status) throw createError.NotFound("Please enter product status.");
  if (!regular_price)
    throw createError.NotFound("Please enter product regular price.");

  // image
  if (!req.file) throw createError.NotFound("Please upload an image.");

  const { image } = req.file;

  let imageUrl = null;

  // image upload to clodinary
  if (req.file) {
    imageUrl = await productUploadToCloud(req.file.path);
  }

  const product = await productModel.create({
    ...req.body,
    image: imageUrl,
    price: {
      regular_price,
      offer_price: offer_price ? offer_price : null,
    },
  });

  successResponse(res, {
    statusCode: 201,
    message: "Product created successfully.",
    payload: {
      data: product,
    },
  });
});

// product add to wishlist
export const addProductToWishList = asyncHandler(async (req, res) => {
  // prdocut add to wishlist
  await addProductToWishListService(req);

  successResponse(res, {
    statusCode: 200,
    message: "Product added to wishlist successfully.",
    payload: {
      data: req.me,
    },
  });
});

// product remove from wishlist
export const removeProductFromWishList = asyncHandler(async (req, res) => {
  await removeProductFromWishListService(req);

  successResponse(res, {
    statusCode: 200,
    message: "Product removed from wishlist successfully.",
    payload: {
      data: req.me,
    },
  });
});
