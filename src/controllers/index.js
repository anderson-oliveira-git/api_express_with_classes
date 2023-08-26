import books from '../../database/books.js';

class Controllers {
  index (_, res) {
    return res.json(books);
  }

  getBookById (req, res) {
    const id = req.params.id;
    const book = books.find(item => item.id == id);

    return res.json(book);
  }
}

export default Controllers;