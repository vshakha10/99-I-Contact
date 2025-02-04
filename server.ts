import { Db } from './node_modules/mongodb/src/db';
import express , {Application , Request , Response} from 'express'; 
import userRouter from './Routes/userRouter'; 
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config({path:"./env"});

const port:string|number|undefined=process.env.PORT ||9900;
const hostName:string = "127.0.0.1"; 
const dbUrl:any=process.env.MONGO_DB_CLOUD_URL;
const dbName:string|undefined=process.env.MONGO_DB_DATABASE;

// const port:number = 9999; 
 
const app:Application = express(); 
 
app.get("/" , (request:Request , response:Response) => { 
    response.status(200); 
    response.json({ 
        msg : "Welcome to Expresss Server" 
    }); 
}); 

mongoose.connect(dbUrl,{dbName:dbName})
.then(()=>{console.log("Database Connection is reddyy...")})
.catch(()=>{console.log("Database Not Connected...")})
// router Configuration 
app.use("/api/users", userRouter); 
 
app.listen(Number(port) , hostName , () => { 
    console.log(`Express Server is started at http://${hostName}:${port}`); 
});