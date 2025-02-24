// routes/userRoutes.js
const express = require('express');
const { getUsers, getUserById, postUser } = require('../controllers/userController');
const router = express.Router();

router.get('/get-users', getUsers);
router.get('/get-usersid', getUserById);
router.post('/signup', postUser);


module.exports = router;
