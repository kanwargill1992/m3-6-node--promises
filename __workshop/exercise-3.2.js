// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

const newAdd = process.env.OPENCAGE_API_KEY;

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: newAdd,
    q: address,
  };

  return opencage
    .geocode(requestObj)
    .then((data) => {
      return data.results[0].geometry;
    })
    .catch((err) => {
      console.log("error", err);
    });
};

getPositionFromAddress("7911 Rue Turley, Lasalle, Qc H8N2A3").then((response) =>
  console.log(response)
);

module.exports = { getPositionFromAddress };
