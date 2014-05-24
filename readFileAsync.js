// include the filesystem module
var fs = require("fs");
 
// fs.readFile: read a file and all its contents,
//              then call a callback function
fs.readFile("./README.md", "utf-8", function (err, contents) { // "utf-8"
 
    // if any error occurred, throw it
    if (err) {
      throw err;
    }

    // do something when no error occurred
    console.log("File content", contents);
 
});