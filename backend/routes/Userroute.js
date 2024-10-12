const express = require('express');
const mongoose = require('mongoose');
const { register, login } = require('../controllers/Usercontroller');
const router = express.Router();


router.post("/register",register);
router.post("/login",login);
module.exports = router;