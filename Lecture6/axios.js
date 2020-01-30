// request promise based library
const axios = require("axios");

async function helper() {
    const date = process.argv[2];
    const cityName = process.argv[3];
    try {
        const response = await axios.get(
            "https://www.metaweather.com/api/location/search/?query=" + cityName
        );
        var woeid = response.data[0].woeid;

    } catch (err) {
        console.log("False Value")
        return
        // console.log(err)
    };
    // you will be inside data key
    // console.log(response.data[0].woeid);


    const AnotherResponse = await axios.get(
        "https://www.metaweather.com/api/location/" + woeid + "/"
    );
    var i = 0
    if (date == "today") {
        i = 0
    } else if (date == "tomorrow") {
        i = 1
    }
    console.log("Date: " + AnotherResponse.data.consolidated_weather[i].applicable_date + "\n" +
        "Weather: " + AnotherResponse.data.consolidated_weather[i].weather_state_name +
        "\n" + "Min Temp: " + AnotherResponse.data.consolidated_weather[i].min_temp.toFixed(2) +
        "\n" + "Max Temp: " + AnotherResponse.data.consolidated_weather[i].max_temp.toFixed(2) + "\n"
        + "Humidity: " + AnotherResponse.data.consolidated_weather[i].humidity);
}

helper();
