const express=require("express");
const cors=require('cors');
const cookieParser = require('cookie-parser')
var morgan = require('morgan')

var helmet= require('helmet');
const connect = require("./config/db");

// import routes
const userRouter=require("../src/modules/users/user.route")

const app=express();
app.use(express.json());


require('dotenv').config()

app.use(cors())

app.use(cookieParser())
app.use(morgan('combined'))
app.use(helmet({
    CrossOriginResourcePolicy:false
}));

// Define routes
app.use("/users",userRouter)


app.get("/",(req,res)=>{
    res.send(`server is running to port`)
})

app.listen(process.env.PORT,async()=>{
   try{
    await connect();
     console.log(`listen to the port numberhttp://localhost:${process.env.PORT}`)
   }catch(error){
    console.log(error)
   }
   
})