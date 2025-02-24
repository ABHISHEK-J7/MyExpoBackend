// models/Donation.js
const mongoose = require("mongoose");

const donations = new mongoose.Schema({
  donor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  foodName: { type: String, required: true },
  quantity: { type: String, required: true },
  location: { type: String, required: true },
  expiry: String,
  status: { type: String, default: "Available" },
}, { timestamps: true });

module.exports = mongoose.model("Donation", donations);