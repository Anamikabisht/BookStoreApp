const { Book } = require('../model/book.model.js');
const { defaultBooks } = require('../model/book.model.js');

const getBook = async (req, res) => {
    try {
        let book = await Book.find();

        if (!book.length) {
            book = await Book.insertMany(defaultBooks);
        }

        res.status(200).json(book);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Failed to fetch books' });
    }
};

module.exports = getBook;