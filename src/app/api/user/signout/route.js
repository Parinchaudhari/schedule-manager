import jwt from 'jsonwebtoken'
import { getTokenData } from '@/app/helpers/getTokenData'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request){
    try {
        let cookieStore=await cookies()
        let response= NextResponse.json({message:"Successfully Signedout",loggedIn:false,error:false},{status:200})
        cookieStore.delete('token')
        return response
    } catch (error) {
        console.log("error ourrced whgile remoing coolkie in signout route",error)
    }
}