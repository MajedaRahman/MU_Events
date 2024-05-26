import upcomingEventModel from "../models/upcomingEventModel.js";
import fs from 'fs'

// add events
const addEvent = async (req,res) => {

    let image_filename =`${req.file.filename}`;

    const event = new upcomingEventModel({
        name:req.body.name,
        description:req.body.description,
        date:req.body.date,
        time:req.body.time,
        duration:req.body.duration,
        place:req.body.place,
        image:image_filename
    })
    try{
        await event.save();
        res.json({sucess:true,message:"Event Added"})
    } catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

// all event list

const listEvent = async(req,res)=>{
    try{
        const events = await upcomingEventModel.find({});
        res.json({success:true,data:events})
    } catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// remove event

const removeEvent = async(req,res)=>{
    try{
        const event = await upcomingEventModel.findById(req.body.id);
        fs.unlink(`uploads/${event.image}`,()=>{})

        await upcomingEventModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Event Removed"})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}
export {addEvent,listEvent,removeEvent}