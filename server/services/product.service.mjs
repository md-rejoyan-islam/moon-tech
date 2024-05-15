import filterQuery from "../helpers/filterQuery.mjs";
import productModel from "../models/product.model.js";
import createError from "http-errors";

// get all product service
export const getAllProductService = async (req, searchFields) => {
  // query filter
  const {
    queries: { skip, limit, fields, sortBy },
    filters,
  } = filterQuery(req, searchFields);

  const result = await productModel
    .find(filters)
    .skip(skip)
    .limit(limit)
    .select(fields)
    .sort(sortBy)
    .lean()
    .then((products) => {
      return products.map((product) => {
        return {
          ...product,
          links: {
            self: `/api/v1/products/${product.slug}`,
            "add-to-card": `/api/v1/products/add-to-card/${product.slug}`,
          },
        };
      });
    });

  // product data not found
  if (!result.length) throw createError(404, "Couldn't find any product data.");

  // pagination object
  const paginationObject = await pagination({
    limit,
    page: req.query.page,
    skip,
    model: productModel,
    filters,
  });

  return {
    result,
    pagination: paginationObject,
  };
};

// get product by slug service
export const getProductBySlugService = async (id) => {
  const result = await productModel.findById(id).lean();
  if (!result) throw createError(404, "Couldn't find any product data.");
  return result;
};

// delete product service
export const deleteProductService = async (id) => {
  // find by id and delete
  const result = await productModel.findByIdAndDelete(id).lean();
  if (!result) throw createError(404, "Couldn't find any product data.");

  // delete images
  result.images.forEach((filename) => {
    deleteImage(`/public/images/products/${filename}`);
  });

  return result;
};

// product add to wishlist service
export const addProductToWishListService = async (req) => {
  // find product by id
  const product = await productModel.exists({ _id: req.params.id });
  if (!product) throw createError(404, "Couldn't find any product data.");

  // check product is already in wishlist or not
  if (req.me.wishList.includes(req.params.id)) {
    throw createError(400, "Product is already in your wishlist.");
  }

  // add product to wishlist
  req.me.wishList.push(req.params.id);
  await req.me.save();
};

// product remove from wishlist servic
export const removeProductFromWishListService = async (req) => {
  // product exists or not
  const product = await productModel.exists({ _id: req.params.id });
  if (!product) throw createError(404, "Couldn't find any product data.");

  // check product is already in wishlist or not
  if (!req.me.wishList.includes(req.params.id)) {
    throw createError(400, "Product is not in your wishlist.");
  }

  // remove product from wishlist
  req.me.wishList = req.me.wishList.filter(
    (id) => id.toString() !== req.params.id
  );
  await req.me.save();
};
