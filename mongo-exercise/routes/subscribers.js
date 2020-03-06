const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscribers');

// GET all subscribers
router.get('/', async(req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET subscriber by ID

async function getSubscriber(req, res, next) {
    try {
        subscriber = await Subscriber.findById(req.params.id);
        if (subscriber === null) {
            return res.status(404).json({ message: `Subscriber with id ${req.params.id} not found`});
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.subscriber = subscriber;
    next();
}

router.get('/:id', getSubscriber, async(req, res) => {
    res.json(res.subscriber);
});



// POST new subscriber

router.post('/', async(req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscriberChannel: req.body.subscriberChannel
    })
    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});



// DELETE subscriber

router.delete('/:id', getSubscriber, async(req,res) => {
    try {
        await res.subscriber.remove();
        res.json({ message: 'deleted subscriber'});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})



// PUT subscriber

router.put('/:id', async(req, res) => {
    try {
        await Subscriber.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true
        })
        res.json({ message: 'document was updated' });
    } catch (err) {
        res.status(500).json({message: err.message });
    }
});       

module.exports = router;