const axios = require("axios");
const { CitiesService } = require('../../services');

module.exports = (req, res) => {
    axios.get("https://raw.githubusercontent.com/datasets/world-cities/master/data/world-cities.csv")
        .then(axiosResponse => {
            res.set("Content-Type", "text/plain")
            res.send(axiosResponse.data);
            res.end();
        })
        .catch(err => console.error(err));

    // const cities = CitiesService.getCities();
    // res.send(cities);
    // res.end();
}