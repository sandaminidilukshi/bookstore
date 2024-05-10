const createBook = require("../controllers/bookController");
const express = require("express");
const router = express.Router();

router.post("/create-book", createBook);

module.exports = router;
