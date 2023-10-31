const moongoose = require("moongoose");

const bookSchema = new moongoose.Schema({
  nome: String,
  genero: String,
  sinopse: String,
  rating: String,
  file : File,
  dataUpload : Date 
});

const User = moongoose.model("Livros", bookSchema);

module.exports = Book;
