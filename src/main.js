const express = require("express");
const routes = require("./controllers");
const app = express();
const connectToDb = require("./database");


const startNodejsServer = async () => {
    app.use(routes());
    await connectToDb();
    
    app.listen(3000, () => console.log("Server started on 3000 port"));
}

startNodejsServer();