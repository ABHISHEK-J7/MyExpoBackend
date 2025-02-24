// routes/donationRoutes.js
const express = require('express');
const { createDonation, getDonations } = require('../controllers/donationController');
const router = express.Router();

router.post('/create-donations', createDonation);
router.get('/get-donations', getDonations);

module.exports = router;