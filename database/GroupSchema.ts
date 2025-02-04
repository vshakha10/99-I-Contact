import { IGroupID } from './../models/IGroup';
import mongoose from "mongoose";


const GroupSchema = new mongoose.Schema<IGroupID>({

    name: {type: String, required :true , unique: true},
},
{timestamps: true}
);

const GroupsTable = mongoose.model<IGroupID>("groups" , GroupSchema);
export default GroupsTable;