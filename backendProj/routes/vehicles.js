const express = require('express');
const router = express.Router();
const Vehicle = require('../models/vehicles');
const addLocation = require('../controllers/addLocation');


async function getVehicleById (req, res, next) {
    try {
        vehicle = await Vehicle.findById(req.params.id);
        if (vehicle === null) {
            return res.status(404).json({ message: `Vehicle with id ${req}not found`});
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// GET all vehicles
router.get('/', async(req, res) => {
    try {
        const vehicles = await Vehicle.find()
        res.json(vehicles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// GET vehicle by id
router.get('/', getVehicleById, async (req, res) => {
    await res.json(res.vehicle)
});


// DELETE vehicle by id
router.delete('/', getVehicleById, async (req, res) => {
    try {
        await res.vehicle.remove();
        res.json({ message: 'Vehicle deleted'});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})


// POST vehicle by id
router.post('/', async (req, res) => {
    const vehicle = new Vehicle({
        userName: req.body.userName,
        location: req.body.location,
        previousLocation: req.body.location
    })
    try {
        const newVehicle = await vehicle.save();
        res.status(201).json(newVehicle);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});


// PUT or update vehicle by id
router.put('/:id', async(req, res) => {
    try {
        await Vehicle.findByIdAndUpdate({ _id: req.params.id }, addLocation(req.body), {
            new: true
        })
        res.json({ message: 'document was updated' });
    } catch (err) {
        res.status(500).json({message: err.message });
    }
}); 



module.exports = router;