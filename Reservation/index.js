const app = express();
const PORT = 3017;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/CC2_CloudNative';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const express = require('express');
const router = express.Router();
const Reservation = require('../Reservation/reservationModel');

router.post('/add', async (req, res) => {
    const reservation = new Reservation({
        user: req.body.user,
        chambre: req.body.chambre,
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;