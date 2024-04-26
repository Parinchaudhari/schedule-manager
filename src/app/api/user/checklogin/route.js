// import { Connect } from "@/app/dbConfig/dbConnect";
import { getTokenData } from "@/app/helpers/getTokenData";
import { NextResponse } from "next/server";
// Connect()
export async function POST(request){
    try {
        let tokenData=await getTokenData(request)
        console.log(tokenData)
        if(!tokenData){
            return NextResponse.json({
                checkLogin:false,
                error:true
            },{status:200})
        }
        return NextResponse.json({
            checkLogin:true,
            error:false,name:`${tokenData.fname} ${tokenData.lname}`
        },{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            checkLogin:false,
            error:true,
            message:"erro ouccured in checklogin"
        },{status:400})
    }
}