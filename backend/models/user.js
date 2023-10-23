const moongoose = require("moongoose");

const userSchema = new moongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = moongoose.model("Usuario", userSchema);

module.exports = User;
