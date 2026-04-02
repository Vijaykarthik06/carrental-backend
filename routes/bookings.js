  
const express = require("express");
const Booking = require("../models/Booking");
const nodemailer = require("nodemailer");
const router = express.Router();

// Create booking

router.post("/", async (req, res) => {
  try {
    const { 
      name, email, phone, pickupDate, returnDate, location, 
      requests, carModel, carId, dailyRate, rentalDays, totalAmount 
    } = req.body;

    // Convert string dates to Date objects
    const booking = new Booking({ 
      name, email, phone, 
      pickupDate: new Date(pickupDate), 
      returnDate: new Date(returnDate), 
      location, requests, carModel, carId, 
      dailyRate, rentalDays, totalAmount 
    });
    
    await booking.save();

    // Generate booking ID
    const bookingId = "CR" + Math.floor(100000 + Math.random() * 900000);

    res.json({ 
      success: true, 
      bookingId: bookingId,
      message: "Booking successful!" 
    });
    
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ 
      success: false, 
      error: "Booking failed", 
      details: err.message 
    });
  }
});

