const mongoose=require('mongoose');

const connect=async()=>{
    try {
       await mongoose.connect(process.env.DB_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
       serverSelectionTimeoutMS: 1000, // 30 seconds
    })
    } catch (error) {
     console.error('MongoDB connection error:', error);
    }
}
module.exports=connect;