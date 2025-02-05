import express, { Request, Response, Application, Router  , } from 'express'
import * as groupContoller from '../controller/groupController'

const groupRouter:Router = Router()

// @usage : to get all contacts
// @method : GET
// @params : not - params
// @url : http://127.0.0.1:9999/contacts

groupRouter.get('/' , async(req:Request , res:Response)=>
{
    await groupContoller.getAllGroup(req,res)
})

export default groupRouter;
