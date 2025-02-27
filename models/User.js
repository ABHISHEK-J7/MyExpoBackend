const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  }, // Ensure the field is named correctly
  username: { 
    type: String, 
    required: true, 
    unique: true 
  },
  email: {
    type: String, 
    required: true, 
    unique: true 
  },
  password: {
    type: String, 
    required: true 
  },
  confirmPassword: {
    type: String, 
    required: true 
  }
  
});

// Remove confirmPassword before saving to DB
userSchema.pre("save", function (next) {
  this.confirmPassword = undefined; // Not stored in DB
  next();
});

module.exports = mongoose.model("User", userSchema);
