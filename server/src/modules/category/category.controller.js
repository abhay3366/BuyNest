const cloudinary = require('../../config/cloudinary');
const fs = require('fs');
const CategoryModal = require('./category.modal');
const { error } = require('console');
const { response } = require('express');

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
    const { name, parentCategory } = req.body;
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
const getCategory = async (req, res) => {
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

// get category count
const getCategoryCount = async (req, res) => {
  try {
    const categoryCount = await CategoryModal.countDocuments({ parentCategory: null })
    if (!categoryCount) {
      res.status(500).json({ success: false, error: true })
    } else {
      res.status(200).json({
        categoryCount: categoryCount
      })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message, error: true, success: false })
  }
}
// get subcategory count
const getSubCategoryCount = async (req, res) => {
  try {
    const subcategoryCount = await CategoryModal.countDocuments({ parentCategory: !null })
    if (!categoryCount) {
      res.status(500).json({ success: false, error: true })
    } else {
      res.status(200).json({
        subcategoryCount: subcategoryCount
      })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message, error: true, success: false })
  }
}
// get single category
const getSingleCategory = async (req, res) => {
  try {
    const category = await CategoryModal.findById(req.params.id);
    if (!category) {
      res.status(500).json({ message: "The category with this id not found" })
    }
    return res.status(200).json({
      error: false,
      success: true,
      category: category
    })
  } catch (error) {
    res.status(500).json({ error: error.error })
  }
}
// remove imge from cloudinary
const removeImageFromCloudinary = async (req, res) => {
  const { public_id } = req.body;
  try {
    const { public_id } = req.body;
    if (req.token.userId === undefined) return res.status(401).json({ message: "Unauthorized user" });

    if (!public_id) {
      return res.status(400).json({ message: "Public ID is required" });
    }

    const result = await cloudinary.uploader.destroy(public_id);

    const user = await User.findById(req.token.userId);
    user.avatar = "";
    await user.save();

    res.status(200).json({ message: "Image deleted successfully", result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// delete category
const deleteCategory = async (req, res) => {

  try {
    // Check whether category with this ID exists
    const category = await CategoryModal.findById(req.params.id)
    const images = category.images;
    console.log("🚀 ~ deleteCategory ~ images:", images)
 // Delete all images from Cloudinary
    for (const img of images) {
      const imgUrl = img;

      const urlArr = imgUrl.split("/");
      const imageNameWithExtension = urlArr[urlArr.length - 1];
      const imageName = imageNameWithExtension.split(".")[0];

      const imageFolder = urlArr[urlArr.length - 2];
      await cloudinary.uploader.destroy(imageName);
      console.log(`Deleted image: ${imageName}`);
    }
     // Delete category from database
      await CategoryModal.findByIdAndDelete(req.params.id);
    // Delete subcategories
      const subcategories =await CategoryModal.find({parentCategory:req.params.id})
     for (const sub of subcategories) {
      await CategoryModal.findByIdAndDelete(sub._id);
      console.log(`Deleted subcategory: ${sub._id}`);
    }
        res.status(200).json({ message: "Category, images, and subcategories deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message })

  }

}

//  update category
const updateCategory = async (req, res) => {
  try {
    const { name, parentCategory } = req.body;
    const newImages = req.files; // if using multer for file upload
    console.log("🚀 ~ updateCategory ~ newImages:", newImages);

    const category = await CategoryModal.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        message: "Category not found",
        success: false,
      });
    }

    // 1️⃣ Delete old images from Cloudinary
    if (category.images && category.images.length > 0) {
      for (const imgUrl of category.images) {
        const urlArr = imgUrl.split("/");
        const imageNameWithExtension = urlArr[urlArr.length - 1];
        const imageName = imageNameWithExtension.split(".")[0];
        await cloudinary.uploader.destroy(imageName);
        console.log(`Deleted old image: ${imageName}`);
      }
    }

    // 2️⃣ Upload new images to Cloudinary and get URLs
    let imageUrls = [];
    if (newImages && newImages.length > 0) {
      for (const file of newImages) {
        const uploadResult = await cloudinary.uploader.upload(file.path, {
          folder: "categories",
        });
        imageUrls.push(uploadResult.secure_url);
      }
    }

    // 3️⃣ Update category in DB
    category.name = name || category.name;
    category.parentCategory = parentCategory || category.parentCategory;
    if (imageUrls.length > 0) category.images = imageUrls;

    await category.save();

    res.status(200).json({
      message: "Category updated successfully",
      success: true,
      category,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};



module.exports = {
  uploadImage,
  createCategory,
  getCategory,
  getCategoryCount,
  getSubCategoryCount,
  getSingleCategory,
  removeImageFromCloudinary,
  deleteCategory,
  updateCategory
};
