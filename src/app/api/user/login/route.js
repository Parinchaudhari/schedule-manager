import { Connect } from "@/app/dbConfig/dbConnect";
import { NextResponse } from "next/server";
import { user } from "@/app/models";
import bcrypt from 'bcrypt'
import  jwt  from "jsonwebtoken";
import { getTokenData } from "@/app/helpers/getTokenData";

Connect()
export async function POST(request){
    try {
        let data=await request.json()
        // console.log(data)
        if(data.email=='' || data.password==''){
            return NextResponse.json({message:"Cannot Login In", loggedIn:false},{status:200})
        }
        let userPresent= await user.findOne({email:data.email})
        if(!userPresent){
            return NextResponse.json({message:"Try creating an account",loggedIn:false},{status:200})
        }
        let comparePassword= await bcrypt.compare(data.password,userPresent.password)
        if(!comparePassword){
            return NextResponse.json({message:"Invalid Password",loggedIn:false},{status:200})
        }
        let tokenData={
            email:userPresent.email,
            fname:userPresent.fName,
            lname:userPresent.lName,
            company:userPresent.company,
            role:userPresent.role,
            storeno:userPresent.storeNo
        }
        let token=jwt.sign(tokenData,process.env.JWT_SECRET_KEY,{expiresIn:'4h'})
        let response=NextResponse.json({
            message:`${userPresent.fName} ${userPresent.lName}`,
            loggedIn:true,
        },{
            status:200
        })
        response.cookies.set('token',token,{httpOnly:true})
        // console.log(token)
        // console.log(tokenData)
        // console.log(data)
        return response   
    } catch (error) {
        return NextResponse.json({message:"Cannot log In", loggedIn:false},{status:400})    
    }
    
}