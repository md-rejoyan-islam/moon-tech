import { body } from "express-validator";

export const brandCreateValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required.Please provide a name."),
  body("slug").optional(),
  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required.Please provide a description."),
];

export const brandUpdateValidator = [];
