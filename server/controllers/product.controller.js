import mongoose from "mongoose";
import asyncHanlder from "express-async-handler";
import productModel from "../models/product.model.js";
import createError from "http-errors";
import { successResponse } from "../helpers/responseHandler.js";
import { productUploadToCloud } from "../utils/cloudinary.js";

/**
 * @description get all products
 */

export const getAllProducts = asyncHanlder(async (req, res) => {
  const result = await productModel.find({});

  if (!result.length) throw createError.NotFound("Couldn't find any data.");

  successResponse(res, {
    statusCode: 200,
    message: "All products data.",
    payload: {
      total: result.length,
      data: result,
    },
  });
});

/**
 * @description get single product by id
 */

export const getProductById = asyncHanlder(async (req, res) => {
  const { id } = req.params;

  // id check
  if (!mongoose.isValidObjectId(id)) {
    throw createError.BadRequest("Invalid user id.");
  }

  const result = await productModel.findById(id);

  if (!result) throw createError.NotFound("Couldn't find product.");

  successResponse(res, {
    statusCode: 200,
    message: "Product data.",
    payload: {
      data: result,
    },
  });
});

/**
 * @description create new product
 */

export const createProduct = asyncHanlder(async (req, res) => {
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
