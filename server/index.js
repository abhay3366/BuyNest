const express=require("express");
const cors=require('cors');
const cookieParser = require('cookie-parser')
var morgan = require('morgan')
var helmet= require('helmet');
const connect = require("./config/db");
const app=express();

require('dotenv').config()
app.use(cors())
app.use(cookieParser())
app.use(morgan('combined'))
app.use(helmet({
    CrossOriginResourcePolicy:false
}));


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