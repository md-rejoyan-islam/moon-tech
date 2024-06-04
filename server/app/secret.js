import dotenv from "dotenv";

dotenv.config();

export const port = process.env.SERVER_PORT || 5050;

export const client_whitelist = process.env.WHITE_LIST.split(",");

export const hostname = "127.0.0.1";

export const mongoURL = process.env.MONGO_URL;

export const allowedImageTypes = ["jpg", "jpeg", "png", "webp"];
export const userMaxImageSize = 400000;
