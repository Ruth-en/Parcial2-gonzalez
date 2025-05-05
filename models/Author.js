const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    bio:{
        type: String,
    },
    fechaNacimiento:{
        type: Date,
        required: true
    },
    nacionalidad:{
        type: String,
        required: true
    },
    libros:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'libros',
        default: []
    }]
});
module.exports = mongoose.model('autors',authorSchema);
