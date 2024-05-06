import multer from "multer";

// multer storage
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// multer for product image upload
export const productPhotoUpload = multer({ storage }).single("image");
