import mongoose from "mongoose";

const upcomingEventSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    date:{type:String,required:true},
    time:{type:String,required:true},
    duration:{type:String,required:true},
    place:{type:String,required:true},
    image:{type:String,required:true}
})

const upcomingEventModel =mongoose.models.upcomingEvent || mongoose.model("upcomingEvent",upcomingEventSchema);

export default upcomingEventModel;