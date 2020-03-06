const mongoose = require('mongoose');


const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        //enum: ['Point']
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

const vehicleSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    location: {
        type: pointSchema,
        required: true
    },
    previousLocation: {
        type: Array
    }
});



module.exports = mongoose.model('Vehicle', vehicleSchema)
// module.exports = mongoose.model('Point', pointSchema);