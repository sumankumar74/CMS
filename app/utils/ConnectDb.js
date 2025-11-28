"use server";
import mongoose from "mongoose";

async function ConnectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI );
    console.log("✅ MongoDB Atlas Connected");
  } catch (err) {
    console.error("Couldn't connect to MongoDB", err);
    throw err;
  }
}

export default ConnectDb;
