const bodyParser = require("body-parser");
const express = require("express");
const moongoose = require("moongoose");
const cors = require("cors");

//routes
const authRouter = require("./routes/authRoute");
const bookRouter = require("./routes/bookRoute");

//config
const dbName = "ArteCultura";
const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// conexão moongoose
moongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeOut: 2000,
});

// atrelar as rotas ao express
app.use("/api/auth", authRouter);
app.use

// primeira rota teste
app.get("/", (req, res) => {
  res.json({ message: "rota teste isso vai mudar" });
});

//escutando a porta
app.listen(port, () => {
  console.log(`porta ${port} rodando`);
});
