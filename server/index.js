import express from "express";
import cors from "cors";
import colors from "colors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import asyncHandler from "express-async-handler";
import mongoBDConnect from "./config/db.js";
import corsOptions from "./config/cors.js";
import { errorResponse, successResponse } from "./helpers/responseHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import productRouter from "./routes/product.route.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors(corsOptions));
app.use(express.json());

// cookie parser
app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// home route
app.get("/", (req, res) => {
  successResponse(res, {
    statusCode: 200,
    message: "Welcome to API.",
  });
});

app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

// client error handling
app.use(
  asyncHandler(async (req, res) => {
    return errorResponse(res, {
      statusCode: 404,
      message: "Could not find this route",
    });
  })
);

// use error handler
app.use(errorHandler);

app.listen(port, () => {
  mongoBDConnect();
  console.log(`Server is running on http://localhost:${port}`.yellow.bold);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  app.close(() => process.exit(1));
});
