import mongoose from "mongoose";

import { errorLogger, logger } from "../helpers/logger.js";
import { mongoURL } from "../app/secret.js";

const mongoBDConnect = async () => {
  try {
    // connection check to server
    mongoose.connection.on("connected", () => {
      logger.info(`Successfully connected to MongoDB server`);
    });

    // after connect if error happer show there
    mongoose.connection.on("error", (err) => {
      errorLogger.error(`Error in connecting in database.`, err);
    });

    // if connection ok connect to database
    const connect = await mongoose.connect(mongoURL);

    // database name
    logger.info(`MongoDB connected to ${connect.connection.name}`);
  } catch (error) {
    errorLogger.error(`Failed to connect to database`);
    // if faild to connect stop server
    process.exit(1);
  }
};

export default mongoBDConnect;
