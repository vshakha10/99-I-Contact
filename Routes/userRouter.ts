
import express , {Application , Request , Response , Router} from 'express'; 
import * as UserController from "../controller/userController";
 
const userRouter:Router = Router(); 

// http://127.0.0.1:9999/api/users/home
userRouter.get("/",async(request:Request , response:Response) => { 
    // response.json({msg : "Hello , Welcome Home"}); 
    console.log("inside Router");
    await UserController.getAllUser(request,response);
}) 
 
//http://127.0.0.1:9999/api/users/insertUser 
userRouter.post("/insertUser" , (request:Request , response:Response) => { 
    response.json({ 
        msg : "Record Inserted..." 
    }) 
}) 
 
export default userRouter;