import express from "express";
const app = express()
import  connectDb  from "./config/db.js";
import dotenv from "dotenv";
import userRoute from "./route/userRoute.js";
import cors from "cors";

// import  bodyParser from 'body-parser';


dotenv.config();
// app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

connectDb();
    app.use(cors());

app.use(express.json());

app.get("/", (req,res) => {
    res.send("<h1>hello server side</h1>")
})

app.use('/api/v1/auth',userRoute)

app.listen( PORT, () => {
    console.log(`server is running in this ${PORT}`)
})
