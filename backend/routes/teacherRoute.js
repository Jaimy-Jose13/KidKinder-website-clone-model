// const express = require("express");
import express from "express";
const router = express.Router();
// const Teacher = require("../models/Teacher");
import Teacher from '../models/Teacher.js';
// const multer = require("multer");
import multer from "multer";
// const path = require("path");
import path from "path";

// Storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// POST teacher with image
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const teacher = new Teacher({
      name: req.body.name,
      position: req.body.position,
      image: req.file.filename
    });

    await teacher.save();
    res.json({ message: "Teacher added successfully" });
  } catch (error) {
     console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// GET teachers
router.get("/", async (req, res) => {
  const teachers = await Teacher.find();
  res.json(teachers);
});

router.delete("/:id", async (req, res) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({ message: "Teacher deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});
// GET single teacher
router.get("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    res.json(teacher);
  } catch (error) {
    res.status(500).json(error);
  }
});
// UPDATE teacher
router.put("/:id", upload.single("image"), async (req, res) => {
  try {

    const updateData = {
      name: req.body.name,
      position: req.body.position
    };

    // If new image uploaded
    if (req.file) {
      updateData.image = req.file.filename;
    }

    const updatedTeacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(updatedTeacher);

  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;