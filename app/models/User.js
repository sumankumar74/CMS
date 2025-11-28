// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  father:{
    type: String,
  },
  gender: {
    type:String
  },
  status:{
    type:Boolean,
    default:false
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  role: {
    type: String,
    default: 'user' 
  },
  address:{
    type: String,
  },
 enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]

}, { timestamps: true });

//delete mongoose.connection.models['User']

export default mongoose.models.User || mongoose.model('User', UserSchema);
