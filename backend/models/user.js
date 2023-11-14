const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  Telefone : String,
  endereco: String,
  complemento : String,
  bairro : String,
  cidade : String,
  uf : String,
  cep : String
});

const User = mongoose.model("Usuario", UsuarioSchema);

module.exports = User;
