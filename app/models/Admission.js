import mongoose from "mongoose";

const AdmissionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    status: { type: String, default: "enrolled" },
  },
  { timestamps: true }
);

export default mongoose.models.Admission ||
  mongoose.model("Admission", AdmissionSchema);
