import asyncHanlder from "express-async-handler";
import createError from "http-errors";
import userModel from "../models/user.model.js";
import { successResponse } from "../helpers/responseHandler.js";
import { matchPassword } from "../utils/password.js";
import createJWT from "../helpers/createJWT.js";
import mongoose from "mongoose";

/**
 * @description: get all users
 * @route: POST /api/v1/users
 */

export const getAllUsers = asyncHanlder(async (req, res) => {
  const result = await userModel.find({});

  if (!result) createError.BadRequest(404, "Couldn't find any data.");

  successResponse(res, {
    statusCode: 200,
    message: "All users data.",
    payload: {
      total: result.length,
      data: result,
    },
  });
});

/**
 * @description: get single user by id
 * @route: POST /api/v1/users/:id
 */

export const getUserById = asyncHanlder(async (req, res) => {
  const { id } = req.params;

  // id check
  if (!mongoose.isValidObjectId(id)) {
    throw createError.BadRequest("Invalid user id.");
  }

  const user = await userModel.findById(id);

  if (!user) createError.BadRequest(404, "Couldn't find user.");

  successResponse(res, {
    statusCode: 200,
    message: "User data.",
    payload: {
      data: user,
    },
  });
});

/**
 * @description: update user by id
 * @route: POST /api/v1/users/:id
 */

export const updateUserById = asyncHanlder(async (req, res) => {
  const { id } = req.params;

  // id check
  if (!mongoose.isValidObjectId(id)) {
    createError.BadRequest(400, "Invalid user id.");
  }

  const user = await userModel.findById(id);

  if (!user) createError.BadRequest(404, "Couldn't find user.");

  const result = await userModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  successResponse(res, {
    statusCode: 200,
    message: "User updated successfully.",
    payload: {
      data: result,
    },
  });
});
