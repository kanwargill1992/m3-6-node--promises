// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// get the code you wrote in 2.2 and paste it here...
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
    .catch((err) => {
      return err.error ? JSON.parse(err.error) : err;
    });
};

greeting("Pb").then((result) => console.log(result));

//Instead of passing entire a data of the language not detetcted we are here
//parsing the error to give us the error object
