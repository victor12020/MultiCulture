//modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path")

//routes
const authRouter = require("./routes/authRoutes");
const bookRouter = require("./routes/bookRoutes");
//middlewares - travas do meio de projeto e acesso
//config

const dbName = "multiculture";
const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
//atrelar as rotas ao express

app.use("/api/auth", authRouter);
app.use("/api/auth", bookRouter);
//conexão mongodb

mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`, {
useNewUrlParser : true,
UseUnifiedTopology : true,
serverSelectionTimeoutMS : 10000
}
)


app.get("/", (req, res)=> {
//primeira rota de teste
res.sendFile(path.join(__dirname,"../index.html"))
});

app.get("/api/auth/postar", (req, res)=> {
  //primeira rota de teste
  res.sendFile(path.join(__dirname,"../postar.html"))
  });

  app.get("/api/auth/login", (req, res)=> {
    //primeira rota de teste
    res.sendFile(path.join(__dirname,"../login.html"))
    });
  

app.get("/api/auth/register", (req, res)=> {
  //primeira rota de teste
  res.sendFile(path.join(__dirname,"../cadastro.html"))
  });
//escutando a porta
app.listen(port, ()=>{
console.log(`O backend está rodando na porta ${port}`)
})