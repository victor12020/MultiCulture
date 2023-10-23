const moongoose = require("moongoose");

const bookSchema = new moongoose.Schema({
  nome: String,
  genero: String,
  sinopse: String,
  rating: String,
});

const User = moongoose.model("Livros", bookSchema);

module.exports = Book;
