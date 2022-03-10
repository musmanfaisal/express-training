const axios = require("axios");
const { CitiesService } = require('../../services');

module.exports = (req, res) => {
    axios.get("https://raw.githubusercontent.com/datasets/world-cities/master/data/world-cities.csv")
        .then(axiosResponse => {
            const majorCities = axiosResponse.data;

            axios.get("https://aws.random.cat/meow?ref=apilist.fun")
                .then(catResponse => {
                    const randomCatPic = catResponse.data;

                    axios.get("https://api.reelgood.com/v3.0/content/random?availability=onAnySource&content_kind=both&nocache=true&region=us&sources=netflix")
                        .then(movieResponse => {
                            const randomMovie = movieResponse.data;

                            res.send({
                                majorCities: majorCities,
                                randomCatPic: randomCatPic,
                                randomMovie: randomMovie
                            });

                            res.end();
                        })
                })
        })

    // const cities = CitiesService.getCities();
    // res.send(cities);
    // res.end();
}


// {
//     randomCatPic: { file: "..." }, // https://aws.random.cat/meow?ref=apilist.fun
//     randomMovie: { ... }, // https://api.reelgood.com/v3.0/content/random?availability=onAnySource&content_kind=both&nocache=true&region=us&sources=netflix
//     majorCities: "..." // https://raw.githubusercontent.com/datasets/world-cities/master/data/world-cities.csv
// }