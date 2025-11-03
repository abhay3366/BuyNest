const express=require("express");
const { createProduct } = require("./product.controller");

const app=express.Router();

app.get("/create",createProduct);

module.exports=app;