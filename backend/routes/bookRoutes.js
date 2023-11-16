const router = require("express").Router();
const jwt = require("jsonwebtoken");
const book = require("../models/book");

router.post("/livros", async (req, res) => {
  const nome = req.body.nome;
  const genero = req.body.genero;
  const rating = req.body.rating;
  const sinopse = req.body.sinopse;
  const dataUpload = req.body.dataUpload;

  const Book = new book({
    nome: nome,
    genero: genero,
    rating: rating,
    sinops: sinopse,
    dataUpload: dataUpload,
  });

  if (
    nome == null ||
    genero == null ||
    rating == null ||
    sinopse == null ||
    dataUpload == null
  ) {
    return res.status(400).json({
      error: "por favor, preencha os campos",
    });
  }
  try {
    const livro = await Book.save();
    res.json({
      error: null,
      msg: "Cadastro ok",
      BookId: livro._id,
    });
  } catch (error) {}
});
