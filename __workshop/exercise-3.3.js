// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

const newAdd = process.env.OPENCAGE_API_KEY;

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: newAdd,
    q: lat,
    lng,
  };

  return opencage
    .geocode(requestObj)
    .then((data) => {
      return data.results[0].formatted;
    })
    .catch((err) => {
      console.log("error", err);
    });
}

getAddressFromPosition("74.8723", "31.6340").then((response) =>
  console.log(response)
);
