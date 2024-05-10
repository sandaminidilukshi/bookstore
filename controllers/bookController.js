const Books = require("../models/bookModel");
const mongoose = require("mongoose");

const createBook = async (req, res) => {
  const name = req.body.name;
  const isbn = req.body.isbn;
  const author = req.body.author;

  const newBook = await Books.create({ name, isbn, author });
  try {
    res.status(200).json(newBook);
  } catch (error) {
    console.log(error);
  }
};

module.exports = createBook;
