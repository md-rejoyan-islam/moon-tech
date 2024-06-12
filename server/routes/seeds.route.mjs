import express from "express";
import { getAllSeedsProducts } from "../controllers/seeds.controller.mjs";

const seedRouter = express.Router();

seedRouter.route("/products").get(getAllSeedsProducts);

export default seedRouter;
