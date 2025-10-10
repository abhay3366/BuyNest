const mongoose=require('mongoose')

const orderSchema=new mongoose.Schema({
  userId:{
    type:mongoose.Schema.ObjectId,
    ref:"User"
   },
    orderId:{
    type:String,
    required:[true,'Enter Order id'],
    unique:true
   },
    productId:{
    type:mongoose.Schema.ObjectId,
    ref:"product"
   },
   product_details:{
    type:String,
    image:Array
   },
    paymentId:{
    type:String,
    default:""
   },
   payment_status:{
    type:String,
    default:""
   },
   delivery_address:{
    type:mongoose.Schema.ObjectId,
    default:""
   },
   subTotalAmt:{
    type:Number,
    default:0
   },
    totalAmt:{
    type:Number,
    default:0
   }
  
},{timestamps:true})

const OrderModal=mongoose.model('order',orderSchema)
module.exports=OrderModal;