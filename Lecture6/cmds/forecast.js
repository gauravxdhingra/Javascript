module.exports = function () {
    console.log(` weather [command] <options>
    today .............. show weather for today
    forecast ........... show 5-day weather forecast
    version ............ show package version
    help ............... show help menu for a command
    `);

    var i;
    for (i = 0; i < 5; i++) {
        console.log("Date: " + AnotherResponse.data.consolidated_weather[i].applicable_date + "\t||\t" +
            "Weather: " + AnotherResponse.data.consolidated_weather[i].weather_state_name +
            "\t||\t" + "Min: " + AnotherResponse.data.consolidated_weather[i].min_temp.toFixed(2) +
            "\t||\t" + "Max: " + AnotherResponse.data.consolidated_weather[i].max_temp.toFixed(2)
        );
    }
};