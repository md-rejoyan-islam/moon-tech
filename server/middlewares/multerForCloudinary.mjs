import multer from "multer";
import { allowedImageTypes, userMaxImageSize } from "../app/secret.js";

// create disk storage
// multer storage
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const fileExtension = file.mimetype.split("/")[1];

  if (file.size > userMaxImageSize) {
    return cb(new Error("Maximum image size is 400KB"));
  }

  if (allowedImageTypes.includes(fileExtension)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Invalid file type. Only jpg, jpeg, png, webp files are allowed"
      ),
      false
    );
  }
};

// user photo
export const userMulterForBuffer = multer({
  storage: storage,
  fileFilter,
}).single("user_photo");

// brand photo
export const brandMulterForBuffer = multer({
  storage,
  fileFilter,
}).single("image");

// product photo
export const productMulterForBuffer = multer({
  storage,
  fileFilter,
}).array("product_images", 10);

// category photo
export const categoryMulterForBuffer = multer({
  storage,
  fileFilter,
}).single("category_image");
