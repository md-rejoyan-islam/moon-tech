import mongoose from "mongoose";
import { errorResponse } from "../helpers/responseHandler.js";

export const authorization = (...role) => {
  return async (req, res, next) => {
    if (!role.includes(req?.me?.role)) {
      return errorResponse(res, {
        statusCode: 403,
        message: "You don't have permission to perform this action",
      });
    }

    // make sure the user is authorized

    const id = req?.params?.id;

    if (id) {
      if (
        req?.me?.role === "admin" ||
        req?.me?._id.toString().split('"')[0] === id
      ) {
        return next();
      }
      return errorResponse(res, {
        statusCode: 403,
        message: "You don't have permission to perform this action",
      });
    }

    next();
  };
};
