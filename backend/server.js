// const express = require("express");
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import teacherRoutes from "./routes/teacherRoute.js"; 
import classRoutes from "./routes/classRoute.js";
/* const mongoose = require("mongoose");
const cors = require("cors");
 */
const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));
mongoose.connect("mongodb+srv://annjaimy:Jaimyanto1%23@cluster-1.rc2ow70.mongodb.net/kinderDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  className: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

// POST API
app.post("/api/book", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Seat booked successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error saving data" });
  }
});

// GET all bookings
app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error fetching bookings" });
  }
});
// UPDATE booking
app.put("/api/bookings/:id", async (req, res) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedBooking);
  } catch (error) {
    res.status(500).json(error);
  }
});
app.delete("/api/bookings/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});
// GET single booking
app.get("/api/bookings/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.json(booking);
  } catch (error) {
    res.status(500).json(error);
  }
});




app.use("/api/teachers",teacherRoutes);
app.use("/api/classes", classRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});