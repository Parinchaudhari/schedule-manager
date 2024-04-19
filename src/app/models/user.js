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
    businessType:{
        type:String,
        required:[true,"businees type is required"]
    },
    storeNo:{
        type:String,
        required:false
    },
    role:{
        type:Number,
        required:[true,"role is required"],
        default:1
    },
}) 

const user=mongoose.models.users || mongoose.model('users',userSchema)
export default user
