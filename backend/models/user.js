const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  telefone : String,
  endereco: String,
  complemento : String,
  bairro : String,
  cidade : String,
  uf : String,
  cep : String
});

const user = mongoose.model("Usuario", UsuarioSchema);

module.exports = user;