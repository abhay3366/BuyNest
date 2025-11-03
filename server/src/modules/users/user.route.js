const express = require('express')
const User = require("./user.modal")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const transporter = require("../../config/mail.js")
const { useDispatch } = require('react-redux')

const { userAvatarController } = require('./user.controller.js')
const upload = require('../../../middleware/multer.js')
const getDataUrl = require('../../../utils/bufferGenerator.js')
// const cloudinary = require('cloudinary').v2;
const cloudinary=require("../../config/cloudinary.js")
const auth = require('../../../middleware/auth.js')
const fs=require("fs");


require("dotenv").config();


const app = express.Router();

// register user details
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ $or: [{ name }, { email }] })
        if (existingUser) {
            res.status(404).json({ message: "Username or Email already exist" })
        }
        // Hash password temporarily
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate 6 digit otp
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        // OTP valid for 10 minutes
        const token = await jwt.sign(
            { name, email, hashedPassword, otp },
            process.env.JWT_SECRET,
            { expiresIn: '24hr' }
        )


        // send mail through otp

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "tabhaykant2@gmail.com",
            subject: "Email Verification OTP",
            html: ` <h3>Hello ${name},</h3>
            <p>Your OTP for email verification is:</p>
            <h2>${otp}</h2>
            <p>Valid for 1hr.</p>`
        })


        res.status(200).json({
            message: 'OTP sent to your email. Please verify.',
            token, // send token to frontend
            name,
            email
        });
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})
// verify otp
app.post("/verify-otp", async (req, res) => {
    try {
        const { token, otp } = req.body;
        // console.log("token otp",otp)

        if (!token || !otp) {
            return res.status(400).json({ message: "Token or OTP missing" });
        }
        // Verify and decode token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log("decode",decoded)
        // Check OTP


        if (decoded.otp !== otp.toString()) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        const user = new User({
            name: decoded.name,
            email: decoded.email,
            password: decoded.hashedPassword
        })
        await user.save();

        res.status(200).json({ message: 'Email verified successfully. User registered!' });
    } catch (error) {
        res.status(404).json({ message: error })
    }
})
// login user
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        // console.log("🚀 ~ user:", user)
        if (!user) {
            return res.status(404).json({ message: "email not found" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        // console.log("🚀 ~ isMatch:", isMatch)
        if (!isMatch) {
            return res.status(404).json({ message: "Invalid Credential" })
        }
        const token = jwt.sign(
            { userId: user._id, name: user.name },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )
        res.json({ token, userId: user._id, name: user.name, email: user.email })
    } catch (error) {
        // console.error("Login error:", error);
        res.status(500).json({ message: error.message });
    }
})

// forgot passwrod
app.post("/forgot-password", async (req, res) => {
    try {
        const { email } = req.body;
        const isExist = await User.findOne({ email }); // also needs await
        if (!isExist) {  // logical fix: check if NOT found
            return res.status(404).json({ message: "Email not found" });
        }
        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const token = jwt.sign(
            { email, otp },
            process.env.JWT_SECRET,
            { expiresIn: '1h' } // 1 hour
        );


        // send OTP
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Password Reset OTP",
            html: `
                <h3>Hello,</h3>
                <p>You recently requested to reset your password.</p>
                <p>Your OTP is:</p>
                <h2 style="color:#2e86de;">${otp}</h2>
                <p>Valid for <strong>1 hour</strong>.</p>
                <p>If you didn’t request this, please ignore this email.</p>
            `
        });

        res.status(200).json({
            message: "OTP sent to your email. Please verify.",
            token,
            email
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post("/verify-forgotPassword-otp", async (req, res) => {
    const { otp, token } = req.body;
    // console.log("🚀 ~ token:", token)
    // console.log("🚀 ~ otp:", otp)

    if (!token || !otp) {
        return res.status(400).json({ message: "Token or OTP missing" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (decode.otp != otp.toString()) {
        return res.status(400).json({ message: "Invalid OTP" });
    }
    res.status(200).json({ status: true, message: "Successfully verify otp" })
})
//  reset password

app.post("/reset-password", async (req, res) => {
    try {
        const { password, token } = req.body;
        // console.log("🚀 ~ token:", token)
        // console.log("🚀 ~ password:", password)

        if (!password || !token.token) {
            return res.status(400).json({ ok: false, message: "Missing password or token" });
        }

        const { email } = token; // get email from token

        // Hash the password with 10 salt rounds
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update the user
        const user = await User.findOneAndUpdate(
            { email: email },
            { password: hashedPassword },
            { new: true } // return the updated document
        );

        if (!user) {
            return res.status(404).json({ ok: false, message: "User not found" });
        }

        res.json({ ok: true, message: "Password updated successfully" });

    } catch (err) {
        // console.error("Error resetting password:", err);
        res.status(500).json({ ok: false, message: "Internal server error" });
    }
});
// 

// upload avatar to cloudinary
app.post("/avatar/cloudinary",auth, upload.array("avatar", 10), async (req, res) => {
  try {
    const files = req.files; // array of files
    console.log("🚀 ~ files:", files)
  

    const user=await User.findById(req.token.userId);
    await cloudinary.uploader.destroy(user.avatar_public_id);
   
    // await cloudinary.uploader.destroy(uploadResults[0]);
    
    if(!user){
        res.status(500).json({message:"User not found", error:true,success:false})
    }
    const uploadResults = [];
 

    for (const file of files) {
      const uploadResult = await cloudinary.uploader.upload(file.path, {
        folder: "avatar",
        public_id: `avatar_${Date.now()}`,
      });
      uploadResults.push(uploadResult);
    }
        // delete the local file after upload if needed
        fs.unlinkSync(files[0].path);   

    user.avatar=uploadResults[0].secure_url;
    user.avatar_public_id=uploadResults[0].public_id;
    await user.save();

    res.status(200).json({
      message: "All files uploaded successfully!",
      results: uploadResults,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// remove imge from cloudinary
app.delete("/avatar/cloudinary/delete", auth, async (req, res) => {
    try {
        const { public_id } = req.body;
        if(req.token.userId===undefined)return res.status(401).json({message:"Unauthorized user"});
        
        if (!public_id) {
            return res.status(400).json({ message: "Public ID is required" });
        }

        const result = await cloudinary.uploader.destroy(public_id);

        const user=await User.findById(req.token.userId);
        user.avatar="";
        await user.save();
       
        res.status(200).json({ message: "Image deleted successfully", result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// app.update("/update-user", auth, async (req, res) => {
//     try {
//         const userId = req.token.userId;
//         const {name,email,password,mobile}= req.body;
//         const user=await User.findById(userId);
//         if(!user){
//             return res.status(404).json({message:"User not found"});
//         }
//         user.name=name||user.name;
//         user.email=email||user.email
//         user.mobile=mobile||user.mobile
//         if(password){
//             const hashedPassword=await bcrypt.hash(password, 10);
//             const isMatch=await bcrypt.compare(password,user.password);
//             if(isMatch){
//                 return res.status(400).json({message:"New password cannot be same as old password"});
//             }
//             const otp=Math.floor((Math.random*900000)+100000).toString();
//             const jwtToken=jwt.sign(
//                 {userId:user._id, name:user.name, hashedPassword, otp},process.env.JWT_SECRET,{expiresIn:'1h'}
//             )
           
//              await transporter.sendMail({
//             from: process.env.EMAIL_USER,
//             to: email,
//             subject: "Update Reset OTP",
//             html: `
//                 <h3>Hello,</h3>
//                 <p>You recently requested to update your account.</p>
//                 <p>Your OTP is:</p>
//                 <h2 style="color:#2e86de;">${otp}</h2>
//                 <p>Valid for <strong>1 hour</strong>.</p>
//                 <p>If you didn’t request this, please ignore this email.</p>
//             `
//         });

//         res.status(200).json({
//             message: "OTP sent to your email. Please verify to update password.",
//             token: jwtToken,
//             success: true
//         });
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// })


app.post("/logout", async (req, res) => {
    res.status(202).json({ message: 'Logged out successfully' })
})

module.exports = app;