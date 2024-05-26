import express from "express"
import { addEvent, listEvent, removeEvent } from "../controllers/pastEventController.js"
import multer from "multer"

const pastEventRouter = express.Router();
 
// Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

pastEventRouter.post("/add",upload.single("image"),addEvent)
pastEventRouter.get("/list",listEvent)
pastEventRouter.post("/remove",removeEvent);

export default pastEventRouter;