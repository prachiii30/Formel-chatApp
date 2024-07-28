import express from "express"
import cors from "cors"
import mongoose from"mongoose"
import dotenv from "dotenv"

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB connection Sucessfull");

}).catch((err)=>{
    console.log(err.message);

})

;
const server=app.listen(process.env.PORT,()=>{
    console.log(`Server Connected on Port ${process.env.PORT}`);
})
