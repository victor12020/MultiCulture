const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  nome: String,
  genero: String,
  sinopse: String,
  rating: String,
  texto: String
});

const User = mongoose.model("Livros", bookSchema);

module.exports = User;
