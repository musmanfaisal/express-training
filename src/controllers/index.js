const express = require("express");
const cities = require("./cities");
const router = express.Router();

module.exports = () => {
    router.use("/cities", cities());
    return router;
}