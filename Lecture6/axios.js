// request promise based library
const axios = require("axios");

async function helper() {
    const response = await axios.get(
        "https://www.metaweather.com/api/location/search/?query=Boston"
    );
    // you will be inside data key
    console.log(response.data[0].woeid);
    var woeid = response.data[0].woeid;

    const AnotherResponse = await axios.get(
        "https://www.metaweather.com/api/location/" + woeid + "/"
    );
    console.log(AnotherResponse.data);
}
helper();
