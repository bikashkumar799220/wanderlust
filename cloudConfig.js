const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY, // Fix here
    api_secret: process.env.CLOUD_API_SECRET // Typo fix: should be "api_secret"
});


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Wanderlust_DEV',
        allowedFormats: ["png", "jpg", "jpeg"], // Fix here
    },
});

  module.exports ={
    cloudinary,
    storage
  };