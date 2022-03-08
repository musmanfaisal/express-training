const express = require("express");
const routes = require("./controllers");

const app = express();

app.use(routes());

app.listen(3000, () => console.log("Server started on 3000 port"));