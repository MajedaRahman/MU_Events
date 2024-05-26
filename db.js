import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://MuEvents:12345@cluster0.ptr0gxq.mongodb.net/MU_Events').then(()=>console.log("DB connected"));
}