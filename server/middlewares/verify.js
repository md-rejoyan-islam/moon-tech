import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import createError from "http-errors";
import userModel from "../models/user.model.js";

export const isLoggedIn = asyncHandler(async (req, res, next) => {
  // token
  const token = req?.cookies?.accessToken;

  // token check
  if (!token) {
    throw createError(
      401,
      "Unauthorized, Access token not found. Please login."
    );
  }
  try {
    // token verify
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const loginUser = await userModel
      .findOne({ email: decode.email })
      .select("-password -__v -updatedAt");
    req.me = loginUser;
    next();
  } catch (error) {
    // clear cookie
    res.clearCookie("accessToken");
    throw createError(
      400,
      "Unauthorized, Invalid access token.Please login again"
    );
  }
});

export const isLoggedOut = asyncHandler(async (req, res, next) => {
  const token = req?.cookies?.accessToken;

  if (token) {
    throw createError(400, "User is already logged in");
  }

  next();
});
