const mongoose = require("mongoose")
const { Schema } = mongoose;
const CarSchema = new Schema({
    // __collection__: {
    //     type: this.collection,
    //     required: false
    // },
    airbags:
    {
        type: String,
        required: true
    },
    audio_system:
    {
        type: String,
        required: true
    },
    body_type:
    {
        type: String,
        required: true
    },
    brand:
    {
        type: String,
        required: true
    },
    carId:
    {
        type: String,
        required: true
    },
    colours:
    {
        type: String,
        required: true
    },
    cylinders:
    {
        type: String,
        required: true
    },
    drivertrain:
    {
        type: String,
        required: true
    },
    emission_norm:
    {
        type: String,
        required: true
    },
    engine:
    {
        type: String,
        required: true
    },
    front_brakes:
    {
        type: String,
        required: true
    },
    fuel_tank:
    {
        type: String,
        required: true
    },
    fuel_type:
    {
        type: String,
        required: true
    },
    gears:
    {
        type: String,
        required: true
    },
    ground_clearance: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    kerb_weight: {
        type: String,
        required: true
    },
    length: {
        type: String,
        required: true
    },
    mileage: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    ncap_rating: {
        type: String,
        required: true
    },
    power: {
        type: String,
        required: true
    },
    power_windows: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    rear_brakes: {
        type: String,
        required: true
    },
    seats: {
        type: String,
        required: true
    },
    torque: {
        type: String,
        required: true
    },
    transmission: {
        type: String,
        required: true
    },
    trending: {
        type: String,
        required: true
    },
    variant: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    wheels: {
        type: String,
        required: true
    },
    width: {
        type: String,
        required: true
    }


});
const Car = mongoose.model('Car', CarSchema)
module.exports = Car;
