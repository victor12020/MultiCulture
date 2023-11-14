const router = require("express").Router();
const jwt = require("jsonwebtoken");
const user = require("../models/user")

//registrando usuario
router.post("/register", async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const Telefone = req.body.Telefone
    const endereco = req.body.endereco
    const complemento = req.body.complemento
    const numeroDeContato = req.body.numeroDeContato
    const bairro = req.body.bairro
    const cidade = req.body.cidade
    const uf = req.body.uf
    const cep = req.body.cep

    const User = new user({
     name : name,
     email : email,
     password : password,
     Telefone : Telefone,
     endereco : endereco,
     complemento : complemento,
     numeroDeContato : numeroDeContato,
     bairro : bairro,
     cidade : cidade,
     uf : uf,
     cep : cep
    });
    
    if (name == null || email == null || password == null) {
        return res.status(400).json({
            error: "por favor, preencha os campos"
        })
    }
        try {
            const newuser = await User.save();
            res.json({ error: null, msg: "Cadastro ok", UsuarioId: newuser._id });
            console.log("cadastro feito do usuario:" + newuser._id);
          } catch (error) {}
})

module.exports = router;