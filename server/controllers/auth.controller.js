import asyncHanlder from "express-async-handler";
import createError from "http-errors";
import userModel from "../models/user.model.js";
import { successResponse } from "../helpers/responseHandler.js";
import { matchPassword } from "../utils/password.js";
import createJWT from "../helpers/createJWT.js";
import hashPassword from "../utils/hashPassword.js";

/**
 * @description: user login
 * @route: POST /api/v1/auth/login
 */

export const userLogin = asyncHanlder(async (req, res) => {
  const { email, password } = req.body;

  if (!email) throw createError.BadRequest("Please enter email address.");

  if (!password) throw createError.BadRequest("Please enter  password.");

  const user = await userModel.findOne({
    email,
  });

  if (!user) throw createError.BadRequest("Couldn't find user.");

  const isMatch = await matchPassword(password, user.password);

  if (!isMatch) throw createError.BadRequest("Invalid user password.");

  const token = await createJWT(
    {
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    process.env.JWT_EXPIRES
  );

  // set cookie
  res.cookie("accessToken", token, {
    httpOnly: true,
    maxAge: eval(process.env.COOKIE_EXPIRE),
    secure: process.env.NODE_ENV === "development" ? false : true,
    sameSite: "strict",
  });

  successResponse(res, {
    statusCode: 200,
    message: "User logged in successfully.",
    payload: {
      data: user,
    },
  });
});

/**
 * @description: user register
 * @route: POST /api/v1/auth/register
 */

export const userRegister = asyncHanlder(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name) throw createError.BadRequest("Please enter your name");
  if (!email) throw createError.BadRequest("Please enter your email address.");
  if (!password) throw createError.BadRequest("Please enter your password.");

  // email check
  const emailExist = await userModel.findOne({
    email,
  });

  if (emailExist) throw createError.Conflict("Email already exist.");

  const user = await userModel.create({
    ...req.body,
    password: hashPassword(password),
  });

  successResponse(res, {
    statusCode: 201,
    message: "User registered successfully.",
    payload: {
      data: user,
    },
  });
});

/**
 * @description: user logout
 * @route: POST /api/v1/auth/logout
 */

export const userLogout = asyncHanlder(async (req, res) => {
  // clear the cookie
  res.clearCookie("accessToken");

  successResponse(res, {
    statusCode: 200,
    message: "User logged out successfully.",
  });
});
