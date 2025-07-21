import mongoose from "mongoose";

const JobApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    gender: { type: String, required: true },
    position: { type: String, required: true },
    resume: { type: String }, // path or URL to uploaded file
    linkedin: { type: String },
    github: { type: String },
    portfolio: { type: String },
    expectedCTC: { type: String },
    noticePeriod: { type: String },
    skills: [String],
  },
  { timestamps: true },
);

export default mongoose.models.JobApplication ||
  mongoose.model("JobApplication", JobApplicationSchema);
