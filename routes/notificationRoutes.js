// routes/notificationRoutes.js
const express = require('express');
const { getNotifications, createNotification } = require('../controllers/notificationController');
const router = express.Router();

router.get('/getNotifications', getNotifications);
router.post('/createNotification', createNotification);

module.exports = router;