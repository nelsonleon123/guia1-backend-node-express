const express = require('express');
const app = express();

app.get('/saludo', (req, res) => {
  res.json({
    mensaje: "Bienvenido al backend con Node.js y Express"
  });
});

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));