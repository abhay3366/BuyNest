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
        ref: 'address'
    },
    shopping_cart: {
        type: mongoose.Schema.ObjectId,
        ref: "cartProduct"
    },
    order_history: {
        type: mongoose.Schema.ObjectId,
        ref: "order"
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

const UsersModel=mongoose.model('user',userSchema)

module.export = UsersModel;
