// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  myPromise = new Promise((resolve, reject) => {
    if (
      array.every((word) => {
        return typeof word === "string";
      })
    ) {
      let newArray = array.map((word) => {
        return word.toUpperCase();
      });
      resolve(newArray);
    } else {
      reject("error");
    }
  });
  return myPromise;
};

const sortWords = (array) => {
  return array.sort();
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
