const seedProducts = [
  {
    _Id: "664116c00a215cbc829c28b1",
    title: "Apple MacBook Air 13.3-Inch",
    slug: "apple-macbook-air-13-3-inc",
    processor: {
      brand: "6641122944971515a9d66401",
      model: "M1 Chip",
      frequency: "3.2 -4.7 GHz",
      core: "8",
      threads: "16",
      cache: "12MB",
    },
    display: {
      size: "13.3 inches",
      type: "Retina Display",
      resolution: "2560 x 1600 pixels",
      touch: "No",
      features:
        "LED-backlit; 227 pixels per inch with support for millions of colors",
    },
    memory: {
      ram: "8GB",
      type: "Unified Memory Architecture",
      speed: "4266MHz",
      removable: "No",
    },
    storage: {
      type: "SSD",
      capacity: "256GB",
      extra_slot: "N/A",
    },
    graphics: {
      model: "Apple 7-core GPU",
      memory: "Shared",
    },
    keyboard: {
      type: "Magic Keyboard",
      backlight: "Yes",
      layout: "64 keys",
    },
    touchpad: {
      type: "Force Touch trackpad for precise cursor control and pressure-sensing capabilities",
      features:
        "enables Force clicks, accelerators, pressure-sensitive drawing, and Multi-Touch gestures",
    },
    camera: {
      webcam: "720p FaceTime HD camera",
      video: "1080p",
    },
    ports: {
      usb: "Two Thunderbolt 4 (USB-C) ports",
      audio: "3.5mm headphone jack",
      card_reader: "No",
      optical_drive: "No",
    },
    networking: {
      wifi: "802.11ax Wi-Fi 6 wireless networking",
      bluetooth: "Bluetooth 5.0 wireless technology",
      lan: "No",
    },
    security: {
      fingerprint: "No",
      face_recognition: "Yes",
      tpm: "No",
    },
    audio: {
      speakers: "Stereo speakers with wide stereo sound",
      microphone: "Three-microphone array with directional beamforming",
    },
    os: "macOS ",
    battery: {
      capacity: "58.2-watt-hour",
      backup: "Up to 18 hours",
    },
    physical: {
      color: "Silver",
      material: "Aluminum",
      dimensions: "11.97 x 8.36 x 0.63 inches",
      weight: "2.8 pounds",
    },
    warranty: {
      duration: "1 year",
      type: "Limited Warranty",
    },
    price: {
      regular: 10.0,
      sale: 8.0,
    },
    images: [],
    quantity: 10,
    sold: 1,
    rating: 2.5,
    shipping: {
      type: "free",
      fee: 5.0,
    },
    status: "active",
  },
];

export default seedProducts;
