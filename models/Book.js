const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    resumen:{
        type: String,
    },
    genero:{
        type: String,
        required: true
    },
    publicationDate:{
        type: Date,
        required: true
    },
    disponible:{
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('libros',bookSchema);
