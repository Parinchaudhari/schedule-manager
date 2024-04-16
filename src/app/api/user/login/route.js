import { Connect } from "@/app/dbConfig/dbConnect";
import { NextResponse } from "next/server";

Connect()
export async function POST(request){
    let data=await request.json()
    if(data.email=='' || data.password!=''){
        return NextResponse.json({message:"Cannot Login In", loggedIn:false},{status:400})
    }
    console.log(data)
    return NextResponse.json({message:"LoggedIn sucessfully", loggedIn:true},{status:200})
}