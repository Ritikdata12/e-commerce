const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();

const userroute = require("./routes/Userroute");
app.use(cors());

app.use(express.json());
require('dotenv').config();

app.get("/" , (req,res)=>{
    res.send("hello server");
})

app.use("/api/user",userroute);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));