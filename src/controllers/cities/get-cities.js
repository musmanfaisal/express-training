const { CitiesService } = require('../../services');

module.exports = (req, res) => {
    const cities = CitiesService.getCities();
    res.send(cities);
    res.end();
}