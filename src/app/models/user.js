import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    fName:{
        type:String,
        required:[true,"first name is required"]
    },
    lName:{
        type:String,
        required:[true,"last name is required"]
    },
    email:{
        type:String,
        required:[true,"email name is required"]
    },
    password:{
        type:String,
        required:[true,"password name is required"]
    },
    company:{
        type:String,
        required:[true,"company name is required"]
    },
    role:{
        type:String,
        required:[true,"role is required"]
    },
}) 