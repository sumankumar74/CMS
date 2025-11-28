import Category from "@/app/models/Category";
import ConnectDb from "@/app/utils/ConnectDb";
import mongoose from "mongoose";

export async function main(){
    try{
        await ConnectDb();
        await Category.insertMany([
            {name:"Web Development", description:"testing"},
            {name:"Computer Science", description:"testing"},
            {name:"Accounting", description:"testing"},
            {name:"Sports", description:"testing"},
            {name:"Fitness", description:"testing"},
            {name:"Engineering", description:"testing"},
            {name:"Music", description:"testing"},
        ])
    }
    catch(error){
        console.log("error seeding database category model");
    }
    finally{
        mongoose.connection.close();
    }
}