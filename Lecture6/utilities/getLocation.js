const axios = require("axios");

module.exports = async function () {
    const response = await axios.get(
        "http://ip-api.com/json/"
    );
    // var cityName = response.data[0].city;
    const location = response.data[0].city;
    console.log(location);

    return location;
}