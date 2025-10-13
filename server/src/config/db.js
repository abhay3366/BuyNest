const mongoose=require('mongoose');

const connect=async()=>{
    try {
       await mongoose.connect(process.env.DB_URL,{
       serverSelectionTimeoutMS: 5000, // 30 seconds
    })
    } catch (error) {
     console.error('MongoDB connection error:', error);
    }
}
module.exports=connect;