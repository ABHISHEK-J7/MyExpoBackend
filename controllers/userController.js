// controllers/userController.js
const User = require('../models/User');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.aggregate([
            {
                $project: {
                    username:1,
                    name: 1,
                    email: 1,
                    password: 1 // Include password (consider hashing it instead of exposing it)
                }
            }
        ]);
        console.log(users)
        res.status(200).json({
            data: users
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.postUser = async (req, res) => {
    try {
      const { name, username, email, password, confirmPassword } = req.body;
  
      // Validation: Ensure all fields are provided
      if (!name || !username || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: "All fields are required." });
      }
  
      // Validation: Check if passwords match
      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match." });
      }
  
      // Check if email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already registered." });
      }
  
      // Save the user in MongoDB
      const newUser = new User({ name, username, email, password, confirmPassword });
      await newUser.save();
  
      res.status(201).json({ message: "User registered successfully!" });
  
    } catch (error) {
      console.error("Signup Error:", error);
      res.status(500).json({ error: "Server error" });
    }
  };