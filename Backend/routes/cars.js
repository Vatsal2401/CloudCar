const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Car = require("../models/Car");
// const { body, validationResult } = require('express-validator');
const path = require('path');

// ROUTE 1 get all the cars from db get request 
router.get("/fetchallcars", async (req, res) => {
    try {
        const cars = await Car.find()
        res.json(cars)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("some error are occurred")
    }
})
module.exports=router;