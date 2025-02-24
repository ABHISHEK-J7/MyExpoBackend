const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the DB connection function
const authRoutes = require('./routes/authRoutes');
const donationRoutes = require('./routes/donationRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/users', userRoutes);

app.get("/api/users/get-users", async (req, res) => {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }
  
    try {
      const user = await User.findOne({ email }); // Adjust based on DB
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
      res.json({ success: true, user });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error });
    }
  });

  app.post("/api/users/signup", async (req, res) => {
    try {
      const { name, username, email, password } = req.body;
  
      // Check if the user already exists, etc.
      const newUser = new User({ name, username, email, password });
      await newUser.save();
  
      // Send a success response
      res.status(201).json({ message: "User registered successfully", user: newUser });
  
    } catch (error) {
      console.error("Signup Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  

app.get('/', (req, res) => {
    res.send('Server is running...');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
