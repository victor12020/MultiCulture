const router = require("express").Router();
const jwt = require("jsonwebtoken");
const user = require("../models/user");

router.post("/register", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const telefone = req.body.Telefone;
  const endereco = req.body.endereco;
  const complemento = req.body.complemento;
  const bairro = req.body.bairro;
  const cidade = req.body.cidade;
  const uf = req.body.uf;
  const cep = req.body.cep;

  if (
    name == null ||
    email == null ||
    password == null ||
    telefone == null ||
    endereco == null ||
    complemento == null ||
    bairro == null ||
    cidade == null ||
    uf == null ||
    cep == null
  ) {
    return res.status(400).json({
      error: "por favor, preencha os campos",
    });
  }

  const emailExists = await user.findOne({
    email: email,
  });
  if (emailExists) {
    return res.status(400).json({
      error: "O e-mail informado já existe.",
    });
  }

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = new user({
    name: name,
    email: email,
    password: passwordHash,
    telefone: telefone,
    endereco: endereco,
    complemento: complemento,
    bairro: bairro,
    cidade: cidade,
    uf: uf,
    cep: cep,
  });

  try {
    const newUser = await user.save();

    const token = jwt.sign(
      {
        name: newUser.name,
        id: newUser._id,
      },
      "segredo"
    );

    res.json({
      error: null,
      msg: "Você fez o cadastro com sucesso!!!",
      token: token,
      userId: newUser._id,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
});

module.exports = router;
