const moongoose = require("moongoose");

const userSchema = new moongoose.Schema({
  name: String,
  email: String,
  password: String,
  Telefone : String,
  endereco: String,
  complemento : String,
  numeroDeContato : String,
  bairro : String,
  cidade : String,
  uf : String,
  cep : String
});

const User = moongoose.model("Usuario", userSchema);

module.exports = User;
