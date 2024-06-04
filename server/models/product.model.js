import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: [true, "Please enter brand id"],
    },
    processor_brand: {
      type: String,
      required: [true, "Please enter processor brand name"],
      trim: true,
    },
    processor_model: {
      type: String,
      required: [true, "Please enter processor model name"],
      trim: true,
    },
    processor_frequency: {
      type: String,
      required: [true, "Please enter processor frequency"],
      trim: true,
    },
    price: {
      regular_price: {
        type: Number,
        required: [true, "Please enter regular price"],
      },
      offer_price: {
        type: Number,
      },
    },
    processor_core: {
      type: String,
      required: [true, "Please enter processor core"],
      trim: true,
    },
    cpu_cache: {
      type: String,
      required: [true, "Please enter cpu cache"],
      trim: true,
    },
    display_size: {
      type: String,
      required: [true, "Please enter product name"],
      trim: true,
    },
    display_type: {
      type: String,
      required: [true, "Please enter display type"],
      trim: true,
    },
    display_resolutaion: {
      type: String,
      required: [true, "Please enter display resolution"],
      trim: true,
    },
    display_features: {
      type: String,
      required: [true, "Please enter display features"],
      trim: true,
    },
    ram: {
      type: String,
      required: [true, "Please enter ram size"],
      trim: true,
    },
    ram_type: {
      type: String,
      required: [true, "Please enter ram type"],
      trim: true,
    },
    storage_type: {
      type: String,
      required: [true, "Please enter storage type"],
      trim: true,
    },
    storage_capacity: {
      type: String,
      required: [true, "Please enter storage capacity"],
      trim: true,
    },
    graphics_model: {
      type: String,
      required: [true, "Please enter graphics model"],
      trim: true,
    },
    graphics_memory: {
      type: String,
      required: [true, "Please enter graphics memory"],
      trim: true,
    },
    keyboard_type: {
      type: String,
      required: [true, "Please enter keyboard type"],
      trim: true,
    },
    bluetooth: {
      type: String,
      required: [true, "Please enter bluetooth version"],
      trim: true,
    },
    operating_system: {
      type: String,
      required: [true, "Please enter operating system name"],
      trim: true,
    },
    weight: {
      type: String,
      required: [true, "Please enter product weight"],
      trim: true,
    },

    image: {
      type: String,
      required: [true, "Please enter product image"],
    },
    status: {
      type: String,
      enum: ["stock", "out of stock", "coming soon"],
      default: "stock",
      validate: {
        validator: function (v) {
          return /stock|out of stock|coming soon/.test(v);
        },
        message: (props) => `${props.value} is not a valid status!`,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
