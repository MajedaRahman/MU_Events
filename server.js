import express, { application } from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import pastEventRouter from "./routes/pastEventRoute.js"
import upcomingEventRouter from "./routes/upcomingEventRoute.js"
import 'dotenv/config'


// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoints
app.use("/api/pastEvent",pastEventRouter)
app.use("/api/upcomingEvent",upcomingEventRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})


// mongodb+srv://MuEvents:12345@cluster0.ptr0gxq.mongodb.net/?