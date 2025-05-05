const Author = require("../models/Author");
const Book = require("../models/Book")


//GET /authors: Obtener todos los libros.
const getAuthors = async (req,res) => {
    try {
        const authors = await Author.find().populate('libros');

        res.status(200).json(authors)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//GET /authors/:id: Obtener un libro por ID.
const getAuthorById = async (req,res) => {
    const {id} = req.params;
    try {
        const author = await Author.findById(id);

        if(!author){
            return res.status(404).json({menssage: 'Autor no encontrado'})
        }

        res.status(200).json(author);
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//POST /authosr: Crear un libro.
const createAuthor = async (req,res) => {
    try {
        const newAuthor = new Author({
            nombre:req.body.nombre,
            bio:req.body.bio,
            fechaNacimiento:req.body.fechaNacimiento,
            nacionalidad:req.body.nacionalidad
        })

        // No se pueden crear autores sin nombre.
        if(newAuthor.nombre === ''){
            return res.status(400).json({message:'No se pueden crear autores sin nombre.'})
        }

        const saveAuthor = await newAuthor.save();

        if(!saveAuthor){
            return res.status(400).json({message:'Author no creado'})
        }
        res.status(201).json(saveAuthor);
    } catch (error) {
        res.status(400).json({message: error})
    }
}

//PUT /authors/:id: Editar un libro.
const updateAuthor = async (req,res) => {
    const {id} = req.params;
    try {
        const editAuthor = await Author.findByIdAndUpdate(
            id,
            {
            nombre:req.body.nombre,
            bio:req.body.bio,
            fechaNacimiento:req.body.fechaNacimiento,
            nacionalidad:req.body.nacionalidad
            },
            {new:true}
        )

        if(!editAuthor){
            return res.res.status(400).json({message:'Autor no encontrado'})
        }

        res.status(200).json(editAuthor)
    } catch (error) {
        res.status(400).json({message: error})
    }
}

//DELETE /author/:id: Eliminar un libro.
const deleteauthor = async (req,res) => {
    const {id} = req.params;
    try {
        const deleteauthor = await Author.findByIdAndDelete(id);

        if(!deleteauthor){
            return res.status(404).json({message:'Autor no encontrado'});
        }
        res.status(200).json({message:'Autor eliminado correstamente'})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//PUT /authors/:id/addBook/:bookId: Agregar un libro a la lista del autor.
const addBook = async (req,res) => {
    const {id,bookId} = req.params;
    try {
        const author = await Author.findById(id);
        const book = await Book.findById(bookId);

        //No se puede agregar un libro inexistente a un autor.
        if(!author || !book){
            return res.status(404).json({message:'Autor o libro no encontrado'})
        }

        //verifico que no este incluido
        if(!author.libros.includes(bookId)){
            author.libros.push(book);
        } else{
            return res.status(400).json({message:'El libro ya esta registrado'})
        }

        await author.save();
        res.status(200).json(author);
    } catch (error) {
        res.status(400).json({message: error})
    }
}
module.exports = {
    getAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteauthor,
    addBook
}