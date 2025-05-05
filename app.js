const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const bookRoutes= require('./routes/books')
const authorRoutes= require('./routes/authors')

const app = express();
app.use(express.json());// Para manejar solicitudes JSON

//Rutas
app.use('/books', bookRoutes)
app.use('/authors', authorRoutes)

//Conectamos a Mongo
dotenv.config();
const PORT = 3000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB conectado');
        app.listen(PORT, () => { console.log(`Servidor corriendo en puerto ${PORT}`) });
    })
    .catch((err) => console.error('Error conectando a MongoDB', err));
