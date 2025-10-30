const cloudinary = require('../../config/cloudinary');
const fs = require('fs');
const CategoryModal = require('./category.modal');

// ✅ Upload Image Middleware
const uploadImage = async (req, res, next) => {
  try {
    const files = req.files;
    const uploadedImages = [];

    for (const file of files) {
      const uploadResult = await cloudinary.uploader.upload(file.path, {
        folder: 'category',
        public_id: 'category_' + Date.now(),
      });

      uploadedImages.push(uploadResult.secure_url);
      fs.unlinkSync(file.path); // delete local file
    }

    console.log("📦 Uploaded images:", uploadedImages);

    // ✅ Attach uploaded images to req for next middleware
    req.uploadedImages = uploadedImages;

    next(); // 👈 move to createCategory
  } catch (error) {
    res.status(500).json({
      message: 'Image upload failed',
      error: error.message,
      success: false,
    });
  }
};

// ✅ Create Category Controller
const createCategory = async (req, res) => {
  try {
    const { name,parentCategory } = req.body;
    const images = req.uploadedImages; // ✅ Access images from previous middleware

    console.log("🚀 Received in createCategory:", images);

    const category = new CategoryModal({
      name,
      images,
      parentCategory
    });

    await category.save();

    return res.status(201).json({
      message: 'Category created successfully',
      category,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Category not created',
      error: error.message,
      success: false,
    });
  }
};
// Get Category
const getCategory=async (req, res) => {
  try {
    // fetch all categories as plain JS objects
    const categories = await CategoryModal.find().populate("parentCategory");
    // console.log("🚀 ~ getCategory ~ categories:", categories)

    // recursive function to build tree
    const buildTree = (parentId = null) => {
      return categories
        .filter(cat => {
          console.log("🚀 ~ buildTree ~ cat:", cat)
        
          const pid = cat.parentCategory?._id || cat.parentCategory;
          return String(pid) === String(parentId);
        })
        .map(cat => ({
          _id: cat._id,
          name: cat.name,
          children: buildTree(cat._id)
        }));
    };

    const categoryTree = buildTree();
    res.json({ success: true, categoryTree });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }

}
module.exports = {
  uploadImage,
  createCategory,
  getCategory
};
