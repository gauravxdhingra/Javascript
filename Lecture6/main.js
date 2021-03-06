// to import something
const help = require("./cmds/help");
const today = require("./cmds/today");
const forecast = require("./cmds/forecast");

// cli args require minimist
const forecast = require("minimist");
const parsedInput = minimist(input)
console.log(parsedInput)

const input = process.argv.slice(2);
const location = input[1];
const cmd = input[0];

if (cmd == "today") {
    today(location);
} else if (cmd == "forecast") {
    forecast(location);
} else if ((cmd == "help")) {
    help();
} else if (cmd == "version") {
    version();
} else {
    console.log("Wrong Command");
}