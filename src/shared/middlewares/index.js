import books from '../../../database/books.js';

class Middlewares {
  verifyIfExistBook (req, res, next) {
    const id = req.params.id;

    const book = books.find(item => item.id == id);

    if (book) {
      return next();
    } 
    
    return res.json({
      id: id,
      status: 'Livro não encontrado! 👻'
    });
  }
}

export default Middlewares;
