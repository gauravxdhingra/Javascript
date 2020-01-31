// module.exports = function () {
//     const AnotherResponse = await axios.get(
//         "https://www.metaweather.com/api/location/" + woeid + "/"
//     );

//     var i;
//     for (i = 0; i < 5; i++) {
//         console.log("Date: " + AnotherResponse.data.consolidated_weather[i].applicable_date + "\t||\t" +
//             "Weather: " + AnotherResponse.data.consolidated_weather[i].weather_state_name +
//             "\t||\t" + "Min: " + AnotherResponse.data.consolidated_weather[i].min_temp.toFixed(2) +
//             "\t||\t" + "Max: " + AnotherResponse.data.consolidated_weather[i].max_temp.toFixed(2)
//         );
//     }
// };
const getRawWeather = require("../utilities/getRawWeather");
const location = require("../utilities/getLocation");

module.exports = async function (location) {
    // 5day waether=> array
    const fullWeather = await getRawWeather(location);
    // console.log(fullWeather)

    for (let i = 0; i < fullWeather.length; i++) {
        const cDate = fullWeather[i]["applicable_date"];
        const minTemp = Math.floor(fullWeather[i]["min_temp"]);
        const maxTemp = Math.floor(fullWeather[i]["max_temp"]);
        const state = fullWeather[i]["weather_state_name"];

        console.log(
            `  ${cDate} - Low: ${minTemp} || High: ${maxTemp} || ${state}`
        )
    }
}