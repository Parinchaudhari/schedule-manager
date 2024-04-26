import jwt from "jsonwebtoken";


export async function getTokenData(request){
   let token=await request.cookies.get('token')?.value || ''
//    console.log(token)
   let tokenData=await jwt.verify(token,process.env.JWT_SECRET_KEY)
//    console.log(tokenData)
   if(!tokenData){
    return false
   }
   return tokenData
}