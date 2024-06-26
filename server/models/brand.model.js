import mongoose from "mongoose";

// create user schema
const brandSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: [true, " Brand name must be unique"],
      minLength: [1, "Brand name must be at least 3 characters"],
      maxLength: [50, "Brand name is too large "],
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: [true, "Slug must be unique"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Brand description is required."],
    },
    status: {
      type: String,
      default: "active",
      enum: {
        values: ["active", "inactive"],
        message: "{VALUE} is invalid for brand status",
      },
    },
  },
  {
    timestamps: true,
  }
);

brandSchema.pre("validate", function (next) {
  this.slug = this.name.split(" ").join("-").toLowerCase().trim();
  next();
});

export default mongoose.model("Brand", brandSchema);
