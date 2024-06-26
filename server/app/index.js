import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import asyncHandler from "express-async-handler";
import createError from "http-errors";
import corsOptions from "../config/cors.js";
import { successResponse } from "../helpers/responseHandler.js";
import { errorHandler } from "../middlewares/errorHandler.js";
import authRouter from "../routes/auth.route.js";
import productRouter from "../routes/product.route.js";
import userRouter from "../routes/user.route.js";
import routes from "./routes.js";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

// cookie parser
app.use(cookieParser());

// home route
app.get("/", (req, res) => {
  successResponse(res, {
    statusCode: 200,
    message: "Welcome to API.",
  });
});

// routes
routes.forEach((route) => {
  app.use(route.path, route.route);
});

// client error handling
app.use(
  asyncHandler(async () => {
    throw createError.NotFound("Could not find this route.");
  })
);

// global error handling
app.use(errorHandler);

export default app;
