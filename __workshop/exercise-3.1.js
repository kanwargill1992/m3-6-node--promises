// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");
// Returns the current position of the ISS
const getIssPosition = () => {
  // write some code...
  return request("http://api.open-notify.org/iss-now.json")
    .then((response) => {
      let str = JSON.parse(response);
      // let long = JSON.stringify(response);
      return str;
    })
    .then((str1) => {
      let lat = str1.iss_position.latitude;
      let long = str1.iss_position.longitude;
      return `Latitude: ${lat}  Longitude: ${long}`;
    })
    .catch((err) => {
      console.log("Error", err);
    });
};
getIssPosition().then((result) => {
  console.log(result);
});

module.exports = { getIssPosition };
