import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: null
    },
    fee: {
        type: Number,
        required: null
    },
    instructor: {
        type: String,
        default: 'Suman Kumar',
        required: null
    },
    difficulty: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        required: null
    },
    prerequisites: {
        type: String
    },
    enrollmentLimit: {
        type: Number,
        default:20
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    duration: {
        type: Number,
        required: null
    },
    image:{
        type: String,
        required: null,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: null
    },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    status: {
        type: String,
        enum: ['Draft', 'Published', 'Closed'],
        default: 'Draft'
    },
});


// delete mongoose.connection.models['Course']

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);;
 