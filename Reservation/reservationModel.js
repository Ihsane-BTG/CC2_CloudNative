const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    chambre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chambre'
    }
});

module.exports = mongoose.model('Reservation', reservationSchema);
