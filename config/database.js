import mongoose from "mongoose";

mongoose. set('strictQuery', false); 
export const connectDB  = ()=>
{
    mongoose.connect(process.env.MONGO_URI);
  console.log("mongoDB connected with port ",process.env.PORT)
}