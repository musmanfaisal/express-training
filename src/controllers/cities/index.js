const express = require("express");
const getCities = require("./get-cities");

const router = express.Router();

module.exports = () => {
    router.get("/", getCities);
    return router;
}