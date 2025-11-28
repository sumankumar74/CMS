import User from "@/app/models/User";
import ConnectDb from "@/app/utils/ConnectDb";
import bcrypt from "bcryptjs";
import { BaseNextResponse } from "next/server";
import { NextResponse } from 'next/server'

export async function POST(req){
    try{
        await ConnectDb();
        const {name, email, password, father, gender, address} = await req.json();
        const  user = await User.findOne({email});
        if(user){
            return BaseNextResponse.json({
                status: 400,
                message: "Email already exists"
            })
        } 

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({name, email, father, gender, address, password: hashedPassword})
        return NextResponse.json({message: "register success"},{status:201})
    }
    catch(error){
        return NextResponse.json({message:error.message},{status:500});
    }
}