const Book = require("../models/Book")


//GET /books: Obtener todos los libros.
const getBooks = async (req,res) => {
    try {
        const books = await Book.find();

        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//GET /books/:id: Obtener un libro por ID.
const getBookById = async (req,res) => {
    const {id} = req.params;
    try {
        const book = await Book.findById(id);

        if(!book){
            return res.status(404).json({menssage: 'Libro no encontrado'})
        }

        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//POST /books: Crear un libro.
const createBook = async (req,res) => {
    try {
        const newBook = new Book({
            titulo:req.body.titulo,
            resumen:req.body.resumen,
            genero:req.body.genero,
            publicacion:req.body.publicacion,
            disponible:req.body.disponible
        })

        const saveBook = await newBook.save();

        if(!saveBook){
            return res.status(400).json({message:'Libro no creado'})
        }
        res.status(201).json(saveBook);
    } catch (error) {
        res.status(400).json({message: error})
    }
}

//PUT /books/:id: Editar un libro.
const updateBook = async (req,res) => {
    const {id} = req.params;
    try {
        const editBook = await Book.findByIdAndUpdate(
            id,
            {
                titulo:req.body.titulo,
                resumen:req.body.resumen,
                genero:req.body.genero,
                publicacion:req.body.publicacion,
                disponible:req.body.disponible
            },
            {new:true}
        )

        if(!editBook){
            return res.res.status(400).json({message:'Libro no encontrado'})
        }

        res.status(200).json(editBook)
    } catch (error) {
        res.status(400).json({message: error})
    }
}

//DELETE /books/:id: Eliminar un libro.
const deleteBook = async (req,res) => {
    const {id} = req.params;
    try {
        const deleteBook = await Book.findByIdAndDelete(id);

        if(!deleteBook){
            return res.status(404).json({message:'Libro no encontrado'});
        }
        res.status(200).json({message:'Libro eliminado correstamente'})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

module.exports = {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
}