
const express = require('express');
const {
        getBooks,
        getBookById,
        createBook,
        updateBook,
        deleteBook
} = require('../controllers/bookController')
const bookRoutes = express.Router()

//GET /books: Obtener todos los libros.
bookRoutes.get('/',getBooks);

//GET /books/:id: Obtener un libro por ID.
bookRoutes.get('/:id',getBookById);


//POST /books: Crear un libro.
bookRoutes.post('/', createBook);

//PUT /books/:id: Editar un libro.
bookRoutes.put('/:id', updateBook);

//DELETE /books/:id: Eliminar un libro.
bookRoutes.delete('/:id',deleteBook);

module.exports= bookRoutes;