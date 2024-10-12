const mongoose = require('mongoose');
const express = require('express');
const Userdata = require('../models/UserModel');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register = async(req,res)=>{
    try{
        const{name , email , gender , password} = req.body;

        const existinguser = await Userdata.findOne({email})
        if(existinguser){
            res.status(409).json('user already exits');
        }
        const hashedpassowrd = await bcrypt.hash(password , 10);

        const newuser = new Userdata({
            name , 
            email , 
            gender , 
            password :  hashedpassowrd
        });

        await newuser.save();
        res.status(201).json({"Account created successfully": newuser});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }   
}

const login = async(req,res)=>{
    const { email, password } = req.body;
    Userdata.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign(
                            { email: user.email, username: user.username },
                            "jwt-secret-key",
                            { expiresIn: "1d" }
                        );
                        res.cookie('token', token);
                       res.status(201).json(user); 
                    } else {
                        return res.json("password is incorrect");
                    }
                });
            } else {
                res.json("this email id is not registered");
            }
        })
        .catch(err => res.json(err));
}

module.exports = {register , login};