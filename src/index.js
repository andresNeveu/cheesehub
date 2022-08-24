const express = require("express"); // para la infraestructura
const morgan = require("morgan"); // muestra impresiones en terminal
const app = express();

app.use(morgan("dev"));

app.listen(3030);
