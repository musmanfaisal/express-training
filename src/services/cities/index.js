const axios = require("axios");

const getCities = async () => {
    const { data: majorCities } = await axios.get("https://raw.githubusercontent.com/datasets/world-cities/master/data/world-cities.csv");
    const { data: randomCatPic } = await axios.get("https://aws.random.cat/meow?ref=apilist.fun");
    const { data: randomMovie } = await axios.get("https://api.reelgood.com/v3.0/content/random?availability=onAnySource&content_kind=both&nocache=true&region=us&sources=netflix");

    return {
        randomCatPic: randomCatPic,
        randomMovie: randomMovie,
        majorCities: majorCities
    }
}

const createCity = (data) => {
    // TODO: create city logic

    return data;
}

module.exports = {
    getCities,
    createCity
}