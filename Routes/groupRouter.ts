import express, { Request, Response, Application, Router  , } from 'express'
import * as groupContoller from '../controller/groupController'
import { body } from 'express-validator'


const groupRouter:Router = Router()

// @usage : to get all contacts
// @method : GET
// @params : not - params
// @url : http://127.0.0.1:9999/contacts

groupRouter.get('/' , async(req:Request , res:Response)=>
{
    await groupContoller.getAllGroup(req,res)
});

/**
    @usage : get a group
    @method : GET
    @params : groupID
    @url : https://localhost:9999/groups/:groupID
*/
groupRouter.get('/:groupId' , async(req:Request , res:Response)=>
    {
        await groupContoller.getGroup(req,res)
    });


export default groupRouter;


groupRouter.post("/", [body('name').not().isEmpty().withMessage("Name is Required")], async (request:Request,response:Response) => {
    console.log("post");
    
    await groupContoller.creategroup(request,response)

  });