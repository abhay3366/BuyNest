const mongoose=require('mongoose')

const addressSchema=new mongoose.Schema({
    address_line:{
        type:String,
        default:""
    },
    city:{
        type:String,
        default:""
    },
    state:{
        type:String,
        default:""
    },
    pincode:{
        type:Number,
        default:""
    },
    country:{
        type:String,
        default:""
    },
    mobile:{
        type:"Mobile",
        default:""
    },
    status:{
        type:Boolean,
        default:true
    },
   
},{timestamps:true})

const AddressModal=mongoose.model('address',addressSchema);
module.exports=AddressModal;