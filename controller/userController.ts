
import { Request,Response } from "express"; 
import {IUser}from "../models/IGroup"; 
import {UserUtil} from "../util/userUtil"; 
import { request } from "http"; 
 
export const getAllUser = async (request: Request, response: Response)=>{ 
    try{ 
        let userData: IUser[] = await UserUtil.getAllUserFromDB(); 
        // console.log("inside Controller : ",userData); 
        return response.status(200).json(userData); 
    }catch (error){ 
        return response.status(500).json({msg : "server Error"}); 
    } 
};