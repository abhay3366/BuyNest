const mongoose = require("mongoose");
const categorySchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    images:{
        type:Array,
        default:[]
    },
    parentCategory:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"category",
        default:null
    }
},{timestamps:true});



const CategoryModal=mongoose.model('category',categorySchema);
module.exports=CategoryModal;