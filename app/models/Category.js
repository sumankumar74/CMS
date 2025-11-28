import mongoose  from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

// delete mongoose.connection.models['Category']

export default mongoose.models.Category || mongoose.model('Category', CategorySchema);