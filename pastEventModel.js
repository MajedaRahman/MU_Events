import mongoose from "mongoose";

const pastEventSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    date:{type:String,required:true},
    image:{type:String,required:true}
})

const pastEventModel =mongoose.models.pastEvent || mongoose.model("pastEvent",pastEventSchema);

export default pastEventModel;