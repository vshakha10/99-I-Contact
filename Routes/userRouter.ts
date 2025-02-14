import { Router,Request,Response } from "express";
import { body } from "express-validator";
import * as UserController from '../controller/UserController'

const userRouter:Router = Router()

userRouter.get('/' , async(req:Request , res:Response)=>
{
await UserController.getAllUsers(req,res)
})



userRouter.post('/', async (req: Request, res: Response) => {
    await UserController.createUsers(req, res)
})

userRouter.put('/:id', async (req: Request, res: Response) => {
    await UserController.UserUpdate(req, res)
})


userRouter.delete('/:id', async (req: Request, res: Response) => {
    await UserController.UserDelete(req, res)
})



export default userRouter;