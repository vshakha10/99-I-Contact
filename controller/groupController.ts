import { Request, Response } from "express";
import { IGroup } from "../models/IGroup";
import GroupsTable from "../database/GroupSchema";
import { request } from "http";
import mongoose from "mongoose";




export const getAllGroup = async(req:Request , res:Response)=>
{
try {
    let groups:IGroup[] | undefined = await GroupsTable.find();
    if (groups) {
        return res.json(groups)
    } 
    
} catch (error:any) {
    return res.json({'msg':'Data is Not Found'});
}
}




export const creategroup = async (request:Request,response:Response)=>{
    let {name} = request.body;
    console.log("create group",name);
    
    let theGroup:IGroup | null | undefined =await new GroupsTable({
        name:name
    }).save();

    if(theGroup){
        return response.status(200).json({
            data:theGroup,
            msg:"Group is created",
        });
    }
}

export const getGroup = async(req:Request , res:Response)=>{
    let{groupId} = req.params;
    console.log("getGroup "+ groupId)
    const mongoGroupId = new mongoose.Types.ObjectId(groupId);
    let theGroup: IGroup|undefined|null= await GroupsTable.findById(
        mongoGroupId
    );
    if(!theGroup){
        return res.status(404).json({
            data:null,
            error:"not a Group id found",
        });
    }
    return res.status(200).json(theGroup);
}
