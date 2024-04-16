import mongoose from "mongoose";
export async function Connect(){
    try {
        mongoose.connect(process.env.MONGO_CONNECT_STRING)
        let connections=mongoose.connection
        connections.on('connected',()=>{
            console.log("Connected To MongoDb Databse")
        })
        connections.on('error',(e)=>{
            console.log("Cannot connect to DB")
        })
    } catch (error) {
        console.log("Erored occered while connecting to mongo",error)
    }
}