const router = require("express").Router();
const jwt = require("jsonwebtoken");
const book = require("../models/book");

//registrando usuario
router.post("/livros", async (req, res) => {
  const nome = req.body.nome;
  const genero = req.body.genero;
  const rating = req.body.rating;
  const sinopse = req.body.sinopse;
  const texto = req.body.texto

  const Book = new book({
  nome : nome,
  genero : genero,
  rating : rating,
  sinops : sinopse,
  texto  : texto
  });

  if (nome == null || genero == null || rating == null || sinopse == null || texto == null) {
    return res.status(400).json({ error: "por favor, preencha os campos" });
  }

  try {
    const newbook = await book.save();
    res.json({ error: null, msg: "Cadastro ok", UsuarioId: newbook._id });
    console.log("cadastro feito do usuario:" + newbook._id);
  } catch (error) {}

});
