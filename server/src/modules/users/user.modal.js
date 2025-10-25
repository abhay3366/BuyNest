const mongoose=require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter your name"]
    },
    email: {
        type: String,
        required: [true, "Enter your email"]
    },
    password: {
        type: String,
        required: [true, "Enter your Password"],
        minlength: [4, "Password must be at least 4 characters long"]
    },
    avatar: {
        type: String,
        default: ""
    },
    avatar_public_id:{
        type: String,
        default: ""
    },
    mobile: {
        type: Number,
        default: ""
    },
    last_login_date: {
        type: Date,
        default: null
    },
    status: {
        type: String,
        enum: ["Active", "Inactive", "Suspended"],
        default: "Active"
    },
    address: {
        type: mongoose.Schema.ObjectId,
        ref: 'address',
         default: null
    },
    shopping_cart: {
        type: mongoose.Schema.ObjectId,
        ref: "cartProduct",
         default: null
    },
    order_history: {
        type: mongoose.Schema.ObjectId,
        ref: "order",
         default: null
    },
    forgot_password_otp: {
        type: String,
        default: null
    },
    forgot_password_expiry: {
        type: Date,
        default: null
    },
    role: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: "USER"
    }
}, { timestamps: true });  

const User=mongoose.model('user',userSchema)

module.exports = User;
