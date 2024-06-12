import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter laptop title"],
    },
    slug: {
      type: String,
      required: [true, "Please enter laptop slug"],
    },
    processor: {
      brand: {
        type: String,
        required: [true, "Please enter processor brand"],
      },
      model: {
        type: String,
        required: [true, "Please enter processor model"],
      },
      frequency: {
        type: String,
        required: [true, "Please enter processor frequency"],
      },
      core: {
        type: String,
        required: [true, "Please enter processor core"],
      },
      threads: {
        type: String,
        required: [true, "Please enter processor threads"],
      },
      cache: {
        type: String,
        required: [true, "Please enter processor cache"],
      },
    },
    display: {
      size: {
        type: String,
        required: [true, "Please enter display size"],
      },
      type: {
        type: String,
        required: [true, "Please enter display type"],
      },
      resolution: {
        type: String,
        required: [true, "Please enter display resolution"],
      },
      touch: {
        type: String,
        required: [true, "Please enter display touch"],
      },
      features: {
        type: String,
        required: [true, "Please enter display features"],
      },
    },
    memory: {
      ram: {
        type: String,
        required: [true, "Please enter memory ram"],
      },
      type: {
        type: String,
        required: [true, "Please enter memory type"],
      },
      speed: {
        type: String,
        required: [true, "Please enter memory speed"],
      },
      removable: {
        type: String,
        required: [true, "Please enter memory removable"],
      },
    },
    storage: {
      type: {
        type: String,
        required: [true, "Please enter storage type"],
      },
      capacity: {
        type: String,
        required: [true, "Please enter storage capacity"],
      },
      extra_slot: {
        type: String,
        required: [true, "Please enter storage extra_slot"],
      },
    },
    graphics: {
      model: {
        type: String,
        required: [true, "Please enter graphics model"],
      },
      memory: {
        type: String,
        required: [true, "Please enter graphics memory"],
      },
    },
    keyboard: {
      type: {
        type: String,
        required: [true, "Please enter keyboard type"],
      },
      backlight: {
        type: String,
        required: [true, "Please enter keyboard backlight"],
      },
      layout: {
        type: String,
        required: [true, "Please enter keyboard layout"],
      },
    },
    touchpad: {
      type: {
        type: String,
        required: [true, "Please enter touchpad type"],
      },
      features: {
        type: String,
        required: [true, "Please enter touchpad features"],
      },
    },
    camera: {
      webcam: {
        type: String,
        required: [true, "Please enter camera webcam"],
      },
      video: {
        type: String,
        required: [true, "Please enter camera video"],
      },
    },
    ports: {
      usb: {
        type: String,
        required: [true, "Please enter ports usb"],
      },
      audio: {
        type: String,
        required: [true, "Please enter ports audio"],
      },
      card_reader: {
        type: String,
        required: [true, "Please enter ports card_reader"],
      },
      optical_drive: {
        type: String,
        required: [true, "Please enter ports optical_drive"],
      },
    },
    networking: {
      wifi: {
        type: String,
        required: [true, "Please enter networking wifi"],
      },
      bluetooth: {
        type: String,
        required: [true, "Please enter networking bluetooth"],
      },
      lan: {
        type: String,
        required: [true, "Please enter networking lan"],
      },
    },
    security: {
      fingerprint: {
        type: String,
        required: [true, "Please enter security fingerprint"],
      },
      face_recognition: {
        type: String,
        required: [true, "Please enter security face_recognition"],
      },
      tpm: {
        type: String,
        required: [true, "Please enter security tpm"],
      },
    },
    audio: {
      speakers: {
        type: String,
        required: [true, "Please enter audio speakers"],
      },
      microphone: {
        type: String,
        required: [true, "Please enter audio microphone"],
      },
    },
    os: {
      type: String,
      required: [true, "Please enter os"],
    },
    battery: {
      capacity: {
        type: String,
        required: [true, "Please enter battery capacity"],
      },
      backup: {
        type: String,
        required: [true, "Please enter battery backup"],
      },
    },
    physical: {
      color: {
        type: String,
        required: [true, "Please enter physical color"],
      },
      material: {
        type: String,
        required: [true, "Please enter physical material"],
      },
      dimensions: {
        type: String,
        required: [true, "Please enter physical dimensions"],
      },
    },
    warranty: {
      duration: {
        type: String,
        required: [true, "Please enter warranty duration"],
      },
      type: {
        type: String,
        required: [true, "Please enter warranty type"],
      },
    },
    price: {
      regular: {
        type: Number,
        required: [true, "Please enter price regular"],
      },
      sale: {
        type: Number,
        required: [true, "Please enter price sale"],
      },
    },
    images: {
      type: Array,
      required: [true, "Please enter images"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter quantity"],
    },
    sold: {
      type: Number,
      required: [true, "Please enter sold"],
    },
    rating: {
      type: Number,
      required: [true, "Please enter rating"],
    },
    shipping: {
      type: {
        type: String,
        required: [true, "Please enter shipping type"],
      },
      fee: {
        type: Number,
        required: [true, "Please enter shipping fee"],
      },
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
