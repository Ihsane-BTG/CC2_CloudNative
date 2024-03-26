const app = express();
const PORT = 3016;
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
const Chambre = require('../Chambre/chambreModel');

router.get('/all', async (req, res) => {
    try {
        const chambres = await Chambre.find();
        res.json(chambres);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/add', async (req, res) => {
    const chambre = new Chambre({
        type: req.body.type,
        capacite: req.body.capacite,
        prix: req.body.prix,
        disponibilite: req.body.disponibilite,
        hotel: req.body.hotel
    });

    try {
        const newChambre = await chambre.save();
        res.status(201).json(newChambre);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/chambre/:id', async (req, res) => {
    try {
        const chambre = await User.findOne({ id: req.params.id });
        if (chambre) {
            res.json(chambre);
        } else {
            res.status(404).json({ message: "Chambre non trouve" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/names', async (req, res) => {
    try {
        const userNames = await User.find().select('nom_complet');
        res.json(userNames);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;