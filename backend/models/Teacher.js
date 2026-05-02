// const mongoose = require("mongoose");
import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: String,
  position: String,
  image: String
});

// module.exports = mongoose.model("Teacher", teacherSchema);
export default mongoose.model("Teacher", teacherSchema);