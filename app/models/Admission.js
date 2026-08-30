import mongoose from "mongoose";

const AdmissionSchema = new mongoose.Schema(
{
user: {
type: mongoose.Schema.Types.ObjectId,
ref: "User",
required: true,
},


course: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Course",
  required: true,
},

status: {
  type: String,
  enum: ["enrolled", "pending", "cancelled", "completed"],
  default: "enrolled",
},

},
{
timestamps: true,
}
);

// Prevent the same user from having duplicate admission
// records for the same course.
AdmissionSchema.index(
{ user: 1, course: 1 },
{ unique: true }
);

export default mongoose.models.Admission ||
mongoose.model("Admission", AdmissionSchema);
