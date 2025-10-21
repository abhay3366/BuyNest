const jwt=require('jsonwebtoken');

const auth=async(req,res,next)=>{
    try {
        const bearerHeader=req.headers['authorization'];
        if(typeof bearerHeader != 'undefined'){
            const bearer=bearerHeader.split(" ")
            const token=bearer[1];
            const user=jwt.verify(token,process.env.JWT_SECRET);
            //Ye line simply decoded user data ko request object me attach karti hai 👇
            req.token=user;
            next();
        }else{
            res.status(401).json({message:"No token Provided"})
        }
    } catch (error) {
         res.status(403).json({message:"Invalid or Expired token"})
    }
}
module.exports=auth;