import { v2 as cloudinary } from "cloudinary";

// email :rejoyanislam0014@gmail.com
cloudinary.config({
  cloud_name: "dnatcmedm",
  api_key: "921419772846642",
  api_secret: "AfWOOWIX21lJRMssF6PLizB3uiM",
  secure: true,
});

export const productUploadToCloud = async (file_path) => {
  // upload brand logo
  const data = await cloudinary.uploader.upload(file_path, {
    folder: "moon-tech/products",
    use_filename: true,
  });
  return data.secure_url;
};

export const cloudDelete = async (publicId) => {
  // delete brand logo
  await cloudinary.uploader.destroy(publicId);
};

//export const cloudUpload = async (req) => {
// upload brand logo
//const data = await cloudinary.uploader.upload(req.file.path);
//return data;
//};
