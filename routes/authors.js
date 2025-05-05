
const express = require('express');
const {
    getAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteauthor,
    addBook
} = require('../controllers/authorController')
const authorRoutes = express.Router()

//GET /authors: Obtener todos los libros.
authorRoutes.get('/',getAuthors);

//GET /authors/:id: Obtener un libro por ID.
authorRoutes.get('/:id',getAuthorById);

//POST /authors: Crear un libro.
authorRoutes.post('/', createAuthor);

//PUT /authors/:id: Editar un libro.
authorRoutes.put('/:id', updateAuthor);

//DELETE /authors/:id: Eliminar un libro.
authorRoutes.delete('/:id',deleteauthor);

//PUT /authors/:id/addBook/:bookId: Agregar un libro a la lista del autor.
authorRoutes.put('/:id/addBook/:bookId',addBook);

module.exports= authorRoutes;