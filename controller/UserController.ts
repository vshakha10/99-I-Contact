import { Request, Response } from "express";
import { IUser } from "../models/IUser";
import UserTable from "../database/UserSchema";



export const getAllUsers = async (req: Request, res: Response) => {

    try {
        let user: IUser[] | undefined = await UserTable.find();

        if (user) {
            return res.json(user)
        }

    } catch (error) {
        return res.json({
            data: error
        })
    }


}



export const createUsers = async (req: Request, res: Response) => {

    try {

        let { username, email, password, imageUrl, isAdmin } = req.body;

        const createUser: IUser | null | undefined = await new UserTable({

            username: username,
            email: email,
            password: password,
            imageUrl: imageUrl,
            isAdmin: isAdmin

        }).save()

        if (createUser) {
            return res.json({
                data: createUser,
                msg: 'create a user'
            })
        }


    } catch (error) {
        return res.json({
            data: error,
            msg: "create data error"
        })
    }




}



export const UserUpdate = async (req: Request, res: Response) => {
    try {
        let { id } = req.params;

        const { username, email, password, imageUrl, isAdmin } = req.body;

        let updateUser: IUser | null | undefined = await UserTable.findByIdAndUpdate(
            id,
            { username, email, password, imageUrl, isAdmin },

        )

        if (updateUser) {
            return res.json({
                data: updateUser,
                msg: "update a data"
            })
        }
    } catch (error) {
        return res.json({
            msg:error
        })
    }
   
}



export const UserDelete = async(req:Request , res:Response)=>
{
    let {id} = req.params;

    const userDelele:IUser | null | undefined = await UserTable.findByIdAndDelete(id) 

    res.json(userDelele)
}