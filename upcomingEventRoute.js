import express from "express"
import { addEvent, listEvent, removeEvent } from "../controllers/upcomingEventController.js"
import multer from "multer"

const upcomingEventRouter = express.Router();
 
// Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

upcomingEventRouter.post("/add",upload.single("image"),addEvent)
upcomingEventRouter.get("/list",listEvent)
upcomingEventRouter.post("/remove",removeEvent);

export default upcomingEventRouter;