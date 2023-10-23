const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const book = require("../models/book");

//registrando usuario
router.post("/livros", async (req, res) => {
  const nome = req.body.nome;
  const genero = req.body.genero;
  const rating = req.body.rating;
  const sinopse = req.body.sinopse;

  if (nome == null || genero == null || rating == null || sinopse == null) {
    return res.status(400).json({ error: "por favor, preencha os campos" });
  }
});
