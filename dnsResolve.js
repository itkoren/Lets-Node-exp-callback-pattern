// include the dns module
var dns = require("dns");
 
// dns.lookup: resolve the dns,
//             then call a callback function
dns.lookup("google.com", function (err, ip) {
 
    // if any error occurred, throw it
    if (err) {
      throw err;
    }

    // do something when no error occurred
    console.log("Google was resolved to %s", ip);
 
});