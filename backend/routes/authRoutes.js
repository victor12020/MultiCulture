const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
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

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const User = new user({
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

  const emailExists = await user.findOne({
    email: email,
  });
  if (emailExists) {
    return res.status(400).json({
      error: "O e-mail informado já existe.",
    });
  }
  else if(9 == telefone.lenght){
      return res.status(400).json({
          error: "por favor, este telefone esta errado"
      })
  }

  else if(2 == cep.lenght){
      return res.status(400).json({
          error: "por favor, este cep esta errado"
      })
  }
  else if(9 == cep.lenght){
      return res.status(400).json({
          error: "por favor, este UF esta errado"
      })
  }

  try {
    const newUser = await User.save();

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

//criando a rota de login
router.post("/login", async(req, res)=>{
  const email = req.body.email;
  const password = req.body.password;
  //e se usuário ja existe?
  const User = await user.findOne({email : email});
  if(!User){
  return res.status(400).json({error : "E-mail não cadastrado, usuário não existe!!!"})
  }
  //testando se a senha informada foi correta
  const checkPassword = await bcrypt.compare(password, User.password);
  if (!checkPassword){
  return res.status(400).json({error: 'Senha inválida'});
  }
  //usuário ok vamos criar o token
  const token = jwt.sign({
  name : User.name,
  id : User._id
  },
  "segredo"
  );
  //retornando o token e mensagem de autorização
  res.json({error : null, msg : "Você esta logado!!!", token: token, userId: user._id})
  });

module.exports = router;
