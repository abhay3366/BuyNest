const express=require('express')
const User=require("./user.modal")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
const transporter=require("../../config/mail.js")
const { useDispatch } = require('react-redux')
dotenv.config();

const app=express.Router();


app.post("/register",async(req,res)=>{
   try{
    const {name,email,password}=req.body;

    const existingUser=await User.findOne({$or:[{name},{email}]})
    if(existingUser){
        res.status(404).json({message:"Username or Email already exist"})
    }
     // Hash password temporarily
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate 6 digit otp
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
       // OTP valid for 10 minutes
    const token=await jwt.sign(
        {name,email,hashedPassword,otp},
        process.env.JWT_SECRET,
        {expiresIn:'24hr'}
    )


    // send mail through otp

    await transporter.sendMail({
        from:process.env.EMAIL_USER,
        to:"tabhaykant2@gmail.com",
        subject:"Email Verification OTP",
        html:` <h3>Hello ${name},</h3>
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
   }catch(error){
    res.status(404).json({message:error.message})
   }
})

app.post("/verify-otp",async(req,res)=>{
    try{
        const {token,otp}=req.body;
        console.log("token otp",otp)
        
         if (!token || !otp) {
      return res.status(400).json({ message: "Token or OTP missing" });
    }
       // Verify and decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decode",decoded)
    // Check OTP
  

    if (decoded.otp !== otp.toString()) {
    return res.status(400).json({ message: "Invalid OTP" });
    } 

   const user= new User({
        name:decoded.name,
        email:decoded.email,
        password:decoded.hashedPassword 
    })
    await user.save();

    res.status(200).json({ message: 'Email verified successfully. User registered!' });
    }catch(error){
        res.status(404).json({message:error})
    }
})




app.post("/login",async(req,res)=>{
   try {
     const {email,password}=req.body
    const user=await User.findOne({email})
    if(!user){
        return res.status(404).json({message:"email not found"})
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(404).json({message:"Invalid Credential"})
    }



    const token=jwt.sign(
        {userId:user._id,name:user.name},
        process.env.JWT_SECRET,
        {expiresIn:'1h'}
    )
    res.json({token})
   } catch (error) {
    res.status(404).json({message:res.error})
   }
})

app.post("/logout",async(req,res)=>{
    res.status(202).json({message:'Logged out successfully'})
})


module.exports=app;