import express from "express";
import multer from "multer";
import path from "path";
import Class from "../models/Class.js";

const router = express.Router();

// Image Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// ADD CLASS
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const newClass = new Class({
      title: req.body.title,
      description: req.body.description,
      ageGroup: req.body.ageGroup,
      totalSeats: req.body.totalSeats,
      classTime: req.body.classTime,
      tuitionFee: req.body.tuitionFee,
      image: req.file.filename
    });

    await newClass.save();
    res.json({ message: "Class added successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET ALL CLASSES
router.get("/", async (req, res) => {
  const classes = await Class.find();
  res.json(classes);
});

export default router;