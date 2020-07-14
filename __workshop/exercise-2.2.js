// Exercise 2.2 - Greeting
// ----------------------

// require the 'request-promise' module.
const request = require("request-promise");

const greeting = (langCode) => {
  return request(`https://journeyedu.herokuapp.com/hello/${langCode}`) // 1
    .then((response) => {
      const parsedRes = JSON.parse(response);
      // console.log("here", parsedRes);
      return parsedRes;
    })
    .then((parsedResponse) => {
      const parsedRes1 = parsedResponse.data.text;
      return parsedRes1;
    })
    .catch((err) => console.log("Error: ", err));
};

// Testing
greeting("fr").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
greeting("EN").then((result) => console.log(result));
greeting("Pb").then((result) => console.log(result));

// 3
