import mongoose from "mongoose";
// pag define han Patient schema
const PatientSchema = new mongoose.Schema(
  {
    // pag define han properties han Patient schema
    name: {
      type: String,
      required: true,
      trim: true
    },
    age: {
      type: Number,
      required: true
    },
    complaint: {
      type: String,
      required: true
    },
    queue_status: {
      type: String,
      enum: ["waiting", "serving", "completed"],
      default: "waiting"
    }
  },
  // pag add han timestamps ha kada document
  { timestamps: true }
);
// pag create han Patient model para ha database
const Patient = mongoose.model("Patient", PatientSchema);

export default Patient;