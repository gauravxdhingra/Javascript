// require file system
var fs = require("fs");

// input
var folderName = process.argv[2];

// console.log(input)
// folder
// undefined

for (var i = 1; i <= 50; i++) {
  if (folderName + i == undefined) {
    console.log("Please enter folderName");
    return;
  }

  // duplicate folders
  if (fs.existsSync(folderName + i) == true) {
    console.log(folderName + i + " Already exists");
    return;
  }

  // mkdir
  fs.rmdirSync(folderName + i);

  // print
  console.log("Folder " + folderName + i + " has been created");
}
