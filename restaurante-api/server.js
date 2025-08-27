const express = require("express");
const app = express();
const PORT = 3000;

const simulateAsyncOperation = (req, res, next) => {
  setTimeout(() => {
    next();
  }, 2000);
};

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain")
  res.send("Hello World! \n");
});

app.get("/pedido/:tipo", simulateAsyncOperation, (req, res) => {
  const type = req.params.tipo;
  res.send(`Seu pedido de ${type} foi recebido e está sendo preparado!`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
