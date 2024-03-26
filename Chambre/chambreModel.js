const mongoose = require('mongoose');

const chambreSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    prix: {
        type: float,
        required: true
    },
    disponibilite: {
        type: Boolean,
        default: true
    },
    hotel: {
        type: String
    }
});

module.exports = mongoose.model('Chambre', chambreSchema);