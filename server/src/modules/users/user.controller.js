const cloudinary = require('cloudinary').v2;
const { response } = require('express');
const fs=require("fs");
require('dotenv').config()
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CONFIG_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_CONFIG_CLOUD_API, 
  api_secret: process.env.CLOUDINARY_CONFIG_API_SECRET,
  secure:true
});
var imageArr=[];
const userAvatarController=async(req,res)=>{
    console.log("🚀 ~ userAvatarController ~ req:", req)
    try {
        const image=req.files;
        console.log("🚀 ~ userAvatarController ~ image:", image)
        const options={
            use_filename:true,
            unique_filename:false,
            overwrite:false
        }
        for(let i=0;i<image?.length;i++){
            const img=await cloudinary.uploader.upload(
                image[i].path,
                options,
                function(error,result){
                    console.log("🚀 ~ userAvatarController ~ result:", result)
                    imageArr.push(req.secure_url);
                    fs.unlinkSync(`uploads/${req.files[i].filename}`)
                    console.log(req.files[i].filename)
                }
            )
        }

        return response.status(200).json({avtar:imageArr[0]})
    } catch (error) {
        return res.status(500).json({message:error.message,error:true,succcess:false})
    }
}

module.exports = { userAvatarController };