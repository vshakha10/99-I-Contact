import  path from "path" 
import{IGroup} from "../models/IGroup"; 
const jsonfile = require('jsonfile') 
 
export class UserUtil{ 
    private static usersJsonpath = path.join(__dirname,"..","db","users.json"); 
    public static getAllUserFromDB():Promise<IGroup[]>{ 
        return new Promise((resolve,reject) => { 
           jsonfile.readFile(this.usersJsonpath, (err:any, data:any )=>{ 
            if(err){ 
                reject(err); 
            }else{ 
                resolve(data); 
            } 
           }) 
         
        }) 
    } 
}