const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    titulo:{
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
    publicacion:{
        type: Date,
        required: true
    },
    disponible:{
        type: Boolean,
        required: true
    }
});
module.exports = mongoose.model('libros',bookSchema);
