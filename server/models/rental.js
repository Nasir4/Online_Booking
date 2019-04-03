const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const rentalSchema = new Schema({
  title: {
    type: String,
    required: true,
    max: [128, "To Long max is 128 charecter"]
  },
  city: { type: String, required: true, lowercase: true },
  street: {
    type: String,
    required: true,
    min: [4, "To short min 4 charecters"]
  },
  category: { type: String, required: true, lowercase: true },
  image: { type: String, required: true },
  bedroom: Number,
  shared: Boolean,
  description: { type: String, required: true },
  dailyRate: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Rental", rentalSchema);