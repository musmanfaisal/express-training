const { CitiesService } = require('../../services');

module.exports = async (req, res) => {
    const cities = await CitiesService.getCities();
    res.send(cities);
    res.end();
}

// {
//     randomCatPic: { file: "..." }, // https://aws.random.cat/meow?ref=apilist.fun
//     randomMovie: { ... }, // https://api.reelgood.com/v3.0/content/random?availability=onAnySource&content_kind=both&nocache=true&region=us&sources=netflix
//     majorCities: "..." // https://raw.githubusercontent.com/datasets/world-cities/master/data/world-cities.csv
// }