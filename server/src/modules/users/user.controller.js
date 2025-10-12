
// const User=require("./user.modal")
// const register= async(req,res)=>{
//    try{
   

//     const {name,email,password}=req.body;
//     // Check if user already exists (by name or email)
//     const existingUser=await User.findOne({$or:[{name},{email}]})
  
//     if(existingUser){
//         res.status(404).json({message:"Username or Email already exist"})
//     }
//     // Hash password
//     const hassedPassword= await bcrypt.hash(password,10);
//     // Save user
//     const user=new User({
//         name:name,
//         email:email,
//         password:hassedPassword
//     })
//     const savedUser=await user.save();
//     res.status(202).json(savedUser)

//    }catch(error){
//     res.status(404).json({message:error.message})

//    }
// }

//  const login=async(req,res)=>{
//    try {
//      const {email,password}=req.body
//     //  Check if email exists
//     const user=await User.findOne({email})
//     if(!user){
//         return res.status(404).json({message:"email not found"})
//     }
//     // Compare password
//     const isMatch=await bcrypt.compare(password,user.password)
//     if(!isMatch){
//         return res.status(404).json({message:"Invalid Credential"})
//     }
//     // Generate JWT token
//     const token=jwt.sign(
//         {userId:user._id,name:user.name},
//         process.env.JWT_SECRET,
//         {expiresIn:'1h'}
//     )
//     res.json({token})
//    } catch (error) {
//     res.status(404).json({message:res.error})
//    }
// }

// module.exports={login,register}