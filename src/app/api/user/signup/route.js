import { Connect } from "@/app/dbConfig/dbConnect";
import { user } from "@/app/models";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

Connect()
export async function POST(request){
    try {
        let saltRounds=10;
        let {fName,lName,email,storeNo,businessType,password,company}=await request.json()
        // console.log(fName)
        // console.log(lName)
        // console.log(email)
        // console.log(storeNo)
        // console.log(businessType)
        // console.log(password)
        if(fName =="",lName =="",company =="",password =="",businessType =="",storeNo =="",email==''){
            return NextResponse.json({message:"Enter Valid Data",signup:false},{status:200})
        }

        let existedUser=await user.findOne({email})
        if(existedUser){
            return NextResponse.json({message:"User Already exists",signup:false},{status:200})
        }

        let hashedPassword=await bcrypt.hash(password,saltRounds)
        console.log(hashedPassword)
        if(!hashedPassword){
            return NextResponse.json({message:"Error occured",signup:false},{status:200})
        }
        let data=await user.create({
            fName,
            lName,
            email,
            password:hashedPassword,
            businessType,
            storeNo,
            company
        })
        return NextResponse.json({message:"Try me pout"})    
    } catch (error) {
        console.log("Cannot added data to db",error)
        return NextResponse.json({message:"Cannot add data",signup:false},{status:400})    
    }
    
}