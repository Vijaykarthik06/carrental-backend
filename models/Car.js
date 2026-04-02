  
const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  name: String,
  model: String,
  pricePerDay: Number,
  image: String,
});

module.exports = mongoose.model("Car", CarSchema);

