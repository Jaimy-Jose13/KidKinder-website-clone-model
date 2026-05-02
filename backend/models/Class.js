import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  title: String,
  description: String,
  ageGroup: String,
  totalSeats: Number,
  classTime: String,
  tuitionFee: String,
  image: String
});

export default mongoose.model("Class", classSchema);