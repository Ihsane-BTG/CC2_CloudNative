const app = express();
const PORT = 3015; 
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
const User = require('../Auth-service/UserModel');

router.post('/add', async (req, res) => {
    const user = new User({
        nom: req.body.nom,
        email: req.body.email,
        login: req.body.login,
        mdp: req.body.mdp
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});



router.get('/:name', async (req, res) => {
    try {
        const user = await User.findOne({ nom: req.params.name });
        if (user) {
            res.status(201).json({ message: "Utilisateur existe" });
        } else {
            res.status(404).json({ message: "Utilisateur n'existe pas" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;