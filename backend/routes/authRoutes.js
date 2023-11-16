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
     bairro : bairro,
     cidade : cidade,
     uf : uf,
     cep : cep
    });
    
    const emailExiste = await user.findOne({email : email}) 

    if (name == null || email == null || password == null || Telefone == null || endereco == null || complemento == null || bairro == null || cidade == null || uf == null||cep == null) {
        return res.status(400).json({
            error: "por favor, preencha os campos"
        })
    }
    else if(emailExiste){
        return res.status(400).json({
            error: "por favor, existe este email no nosso banco"
        })
    }
    else if(9 == Telefone.lenght){
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
    else{
        try {
            const newuser = await User.save();
            res.json({ error: null, msg: "Cadastro ok", UsuarioId: newuser._id });
            console.log("cadastro feito do usuario:" + newuser._id);
          } catch (error) {}
    }
})

module.exports = router;