const express=require("express");
const upload = require("../../../middleware/multer");

const auth=require("../../../middleware/auth");
const { uploadImage, createCategory, getCategory, getCategoryCount, getSubCategoryCount, getSingleCategory } = require("./category.controller");


const app=express.Router();
// app.post("/uploadImages",upload.array("images",10),uploadImage);
// app.post("/create",createCategory);
app.post("/createCateogry",auth, upload.array("images", 10), uploadImage, createCategory);
app.get("/getCategory",getCategory)
app.get("/get/category/count",getCategoryCount)
app.get("/get/subcategory/count",getSubCategoryCount)
app.get("/:id",getSingleCategory)

module.exports=app;