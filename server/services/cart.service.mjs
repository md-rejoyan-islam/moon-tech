import filterQuery from "../helpers/filterQuery.mjs";
import cartModel from "../models/cart.model";
import pagination from "../utils/pagination.mjs";
import createError from "http-errors";

// get all product card service
export const getAllProductCarts = async (req, searchFields) => {
  // query filter
  const {
    queries: { skip, limit, fields, sortBy },
    filters,
  } = filterQuery(req, searchFields);

  const result = await cartModel
    .find(filters)
    .skip(skip)
    .limit(limit)
    .select(fields)
    .sort(sortBy)
    .lean();
  // .then((cards) => {
  //   return cards.map((product) => {
  //     return {
  //       ...product,
  //       links: {
  //         self: `/api/v1/cards/${product.slug}`,
  //         "add-to-card": `/api/v1/products/add-to-card/${product.slug}`,
  //       },
  //     };
  //   });
  // });

  // product data not found
  if (!result.length) throw createError(404, "Couldn't find any cart data.");

  // pagination object
  const paginationObject = await pagination({
    limit,
    page: req.query.page,
    skip,
    model: card,
    filters,
  });

  return {
    result,
    pagination: paginationObject,
  };
};

// add product to cart service
export const createProductService = async (product) => {
  const result = await cartModel.create(product);
  return result;
};

// remove product from cart service
export const deleteProductService = async (id) => {
  const result = await cartModel.findByIdAndDelete(id);

  if (!result) throw createError(404, "Couldn't find any cart data.");
  return result;
};
