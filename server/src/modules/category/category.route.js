const express=require("express");
const upload = require("../../../middleware/multer");

const auth=require("../../../middleware/auth");
const { uploadImage, createCategory, getCategory } = require("./category.controller");


const app=express.Router();
// app.post("/uploadImages",upload.array("images",10),uploadImage);
// app.post("/create",createCategory);
app.post("/createCateogry", upload.array("images", 10), uploadImage, createCategory);
app.get("/getCategory",getCategory)


module.exports=app;