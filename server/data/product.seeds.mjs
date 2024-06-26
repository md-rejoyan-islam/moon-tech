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
      regular: 100000.0,
      sale: 8.0,
    },
    images: [],
    quantity: 10,
    sold: 1,
    rating: 2.5,
    weight: "2.8 pounds",
    shipping: {
      type: "free",
      fee: 5.0,
    },
    status: "stock",
  },
  {
    _id: "664116c00a215cbc829c28b2",
    title: "HP Pavilion 15.6-Inch",
    slug: "hp-pavilion-15-6-inch",
    processor: {
      brand: "6641122944971515a9d66402",
      model: "Intel Core i5",
      frequency: "2.4 - 4.2 GHz",
      core: "4",
      threads: "8",
      cache: "6MB",
    },
    display: {
      size: "15.6 inches",
      type: "IPS",
      resolution: "1920 x 1080 pixels",
      touch: "No",
      features: "micro-edge WLED-backlit",
    },
    memory: {
      ram: "8GB",
      type: "DDR4",
      speed: "2666MHz",
      removable: "Yes",
    },
    storage: {
      type: "SSD",
      capacity: "256GB",
      extra_slot: "Yes",
    },
    graphics: {
      model: "Intel UHD Graphics",
      memory: "Shared",
    },
    keyboard: {
      type: "Full-size island-style keyboard",
      backlight: "No",
      layout: "101 keys",
    },
    touchpad: {
      type: "Precision Touchpad Support",
      features: "Multi-touch gesture support",
    },
    camera: {
      webcam: "HP TrueVision HD Camera",
      video: "720p",
    },
    ports: {
      usb: "One USB 3.1 Type-C Gen 1",
      audio: "3.5mm headphone jack",
      card_reader: "Yes",
      optical_drive: "No",
    },
    networking: {
      wifi: "802.11ac Wi-Fi 5",
      bluetooth: "Bluetooth 4.2",
      lan: "Yes",
    },
    security: {
      fingerprint: "No",
      face_recognition: "No",
      tpm: "No",
    },
    audio: {
      speakers: "Dual speakers",
      microphone: "Integrated dual array digital microphone",
    },
    os: "Windows 10",
    battery: {
      capacity: "41-watt-hour",
      backup: "Up to 8 hours",
    },
    physical: {
      color: "Silver",
      material: "Plastic",
      dimensions: "14.24 x 9.67 x 0.7 inches",
      weight: "3.86 pounds",
    },
    warranty: {
      duration: "1 year",
      type: "Limited Warranty",
    },
    price: {
      regular: 80000.0,
      sale: 6.0,
    },
    images: [],
    quantity: 10,
    sold: 1,
    rating: 3.5,
    weight: "3.86 pounds",
    shipping: {
      type: "free",
      fee: 5.0,
    },
    status: "stock",
  },
  {
    _id: "664116c00a215cbc829c28b3",
    title: "Dell Inspiron 15.6-Inch",
    slug: "dell-inspiron-15-6-inch",
    processor: {
      brand: "6641122944971515a9d66403",
      model: "Intel Core i7",
      frequency: "2.6 - 5.0 GHz",
      core: "6",
      threads: "12",
      cache: "12MB",
    },
    display: {
      size: "15.6 inches",
      type: "LED",
      resolution: "1920 x 1080 pixels",
      touch: "No",
      features: "Anti-glare",
    },
    memory: {
      ram: "16GB",
      type: "DDR4",
      speed: "2666MHz",
      removable: "Yes",
    },
    storage: {
      type: "SSD",
      capacity: "512GB",
      extra_slot: "Yes",
    },
    graphics: {
      model: "NVIDIA GeForce GTX 1650",
      memory: "4GB GDDR5",
    },
    keyboard: {
      type: "Full-size backlit keyboard",
      backlight: "Yes",
      layout: "101 keys",
    },
    touchpad: {
      type: "Precision Touchpad Support",
      features: "Multi-touch gesture support",
    },
    camera: {
      webcam: "Integrated Widescreen HD (720p) Webcam",
      video: "720p",
    },
    ports: {
      usb: "One USB 3.1 Type-C Gen 1",
      audio: "3.5mm headphone jack",
      card_reader: "Yes",
      optical_drive: "No",
    },
    networking: {
      wifi: "802.11ac Wi-Fi 5",
      bluetooth: "Bluetooth 4.2",
      lan: "Yes",
    },
    security: {
      fingerprint: "No",
      face_recognition: "No",
      tpm: "No",
    },
    audio: {
      speakers: "Stereo speakers",
      microphone: "Integrated dual array digital microphone",
    },
    os: "Windows 10",
    battery: {
      capacity: "56-watt-hour",
      backup: "Up to 6 hours",
    },
    physical: {
      color: "Black",
      material: "Plastic",
      dimensions: "14.33 x 9.8 x 0.78 inches",
      weight: "4.03 pounds",
    },
    warranty: {
      duration: "1 year",
      type: "Limited Warranty",
    },
    price: {
      regular: 120000.0,
      sale: 10.0,
    },
    images: [],
    quantity: 10,
    sold: 1,
    rating: 4.5,
    weight: "4.03 pounds",
    shipping: {
      type: "free",
      fee: 5.0,
    },
    status: "stock",
  },
  {
    _id: "664116c00a215cbc829c28b4",
    title: "Lenovo IdeaPad 14-Inch",
    slug: "lenovo-ideapad-14-inch",
    processor: {
      brand: "6641122944971515a9d66404",
      model: "Intel Core i3",
      frequency: "2.1 - 4.1 GHz",
      core: "2",
      threads: "4",
      cache: "4MB",
    },
    display: {
      size: "14 inches",
      type: "LED",
      resolution: "1366 x 768 pixels",
      touch: "No",
      features: "Anti-glare",
    },
    memory: {
      ram: "4GB",
      type: "DDR4",
      speed: "2400MHz",
      removable: "Yes",
    },
    storage: {
      type: "HDD",
      capacity: "1TB",
      extra_slot: "Yes",
    },
    graphics: {
      model: "Intel UHD Graphics",
      memory: "Shared",
    },
    keyboard: {
      type: "Full-size keyboard",
      backlight: "No",
      layout: "101 keys",
    },
    touchpad: {
      type: "Precision Touchpad Support",
      features: "Multi-touch gesture support",
    },
    camera: {
      webcam: "720p HD Camera",
      video: "720p",
    },
    ports: {
      usb: "One USB 3.1 Type-C Gen 1",
      audio: "3.5mm headphone jack",
      card_reader: "Yes",
      optical_drive: "No",
    },
    networking: {
      wifi: "802.11ac Wi-Fi 5",
      bluetooth: "Bluetooth 4.2",
      lan: "Yes",
    },
    security: {
      fingerprint: "No",
      face_recognition: "No",
      tpm: "No",
    },
    audio: {
      speakers: "Stereo speakers",
      microphone: "Integrated dual array digital microphone",
    },
    os: "Windows 10",
    battery: {
      capacity: "35-watt-hour",
      backup: "Up to 5 hours",
    },
    physical: {
      color: "Black",
      material: "Plastic",
      dimensions: "12.88 x 9.49 x 0.78 inches",
      weight: "3.3 pounds",
    },
    warranty: {
      duration: "1 year",
      type: "Limited Warranty",
    },
    price: {
      regular: 60000.0,
      sale: 4.0,
    },
    images: [],
    quantity: 10,
    sold: 1,
    rating: 3.5,
    weight: "3.3 pounds",
    shipping: {
      type: "free",
      fee: 5.0,
    },
    status: "stock",
  },
  {
    _id: "664116c00a215cbc829c28b5",
    title: "Acer Aspire 15.6-Inch",
    slug: "acer-aspire-15-6-inch",
    processor: {
      brand: "6641122944971515a9d66405",
      model: "AMD Ryzen 5",
      frequency: "2.1 - 3.7 GHz",
      core: "4",
      threads: "8",
      cache: "6MB",
    },
    display: {
      size: "15.6 inches",
      type: "LED",
      resolution: "1920 x 1080 pixels",
      touch: "No",
      features: "ComfyView",
    },
    memory: {
      ram: "8GB",
      type: "DDR4",
      speed: "2400MHz",
      removable: "Yes",
    },
    storage: {
      type: "HDD",
      capacity: "1TB",
      extra_slot: "Yes",
    },
    graphics: {
      model: "AMD Radeon Vega 8",
      memory: "Shared",
    },
    keyboard: {
      type: "Full-size keyboard",
      backlight: "No",
      layout: "101 keys",
    },
    touchpad: {
      type: "Precision Touchpad Support",
      features: "Multi-touch gesture support",
    },
    camera: {
      webcam: "640 x 480 resolution",
      video: "480p",
    },
    ports: {
      usb: "One USB 3.1 Type-C Gen 1",
      audio: "3.5mm headphone jack",
      card_reader: "Yes",
      optical_drive: "No",
    },
    networking: {
      wifi: "802.11ac Wi-Fi 5",
      bluetooth: "Bluetooth 4.2",
      lan: "Yes",
    },
    security: {
      fingerprint: "No",
      face_recognition: "No",
      tpm: "No",
    },
    audio: {
      speakers: "Stereo speakers",
      microphone: "Integrated dual array digital microphone",
    },
    os: "Windows 10",
    battery: {
      capacity: "48-watt-hour",
      backup: "Up to 7 hours",
    },
    physical: {
      color: "Black",
      material: "Plastic",
      dimensions: "14.31 x 9.74 x 0.71 inches",
      weight: "4.19 pounds",
    },
    warranty: {
      duration: "1 year",
      type: "Limited Warranty",
    },
    price: {
      regular: 70000.0,
      sale: 5.0,
    },
    images: [],
    quantity: 10,
    sold: 1,
    rating: 4.5,
    weight: "4.19 pounds",
    shipping: {
      type: "free",
      fee: 5.0,
    },
    status: "stock",
  },
  {
    _id: "664116c00a215cbc829c28b6",
    title: "Asus VivoBook 15.6-Inch",
    slug: "asus-vivobook-15-6-inch",
    processor: {
      brand: "6641122944971515a9d66406",
      model: "AMD Ryzen 7",
      frequency: "2.3 - 4.0 GHz",
      core: "4",
      threads: "8",
      cache: "6MB",
    },
    display: {
      size: "15.6 inches",
      type: "LED",
      resolution: "1920 x 1080 pixels",
      touch: "No",
      features: "ComfyView",
    },
    memory: {
      ram: "8GB",
      type: "DDR4",
      speed: "2400MHz",
      removable: "Yes",
    },
    storage: {
      type: "HDD",
      capacity: "1TB",
      extra_slot: "Yes",
    },
    graphics: {
      model: "AMD Radeon Vega 10",
      memory: "Shared",
    },
    keyboard: {
      type: "Full-size keyboard",
      backlight: "No",
      layout: "101 keys",
    },
    touchpad: {
      type: "Precision Touchpad Support",
      features: "Multi-touch gesture support",
    },
    camera: {
      webcam: "640 x 480 resolution",
      video: "480p",
    },
    ports: {
      usb: "One USB 3.1 Type-C Gen 1",
      audio: "3.5mm headphone jack",
      card_reader: "Yes",
      optical_drive: "No",
    },
    networking: {
      wifi: "802.11ac Wi-Fi 5",
      bluetooth: "Bluetooth 4.2",
      lan: "Yes",
    },
    security: {
      fingerprint: "No",
      face_recognition: "No",
      tpm: "No",
    },
    audio: {
      speakers: "Stereo speakers",
      microphone: "Integrated dual array digital microphone",
    },
    os: "Windows 10",
    battery: {
      capacity: "48-watt-hour",
      backup: "Up to 7 hours",
    },
    physical: {
      color: "Black",
      material: "Plastic",
      dimensions: "14.31 x 9.74 x 0.71 inches",
      weight: "4.19 pounds",
    },
    warranty: {
      duration: "1 year",
      type: "Limited Warranty",
    },
    price: {
      regular: 90000.0,
      sale: 7.0,
    },
    images: [],
    quantity: 10,
    sold: 1,
    rating: 4.5,
    weight: "4.19 pounds",
    shipping: {
      type: "free",
      fee: 5.0,
    },
    status: "stock",
  },
];

export default seedProducts;
