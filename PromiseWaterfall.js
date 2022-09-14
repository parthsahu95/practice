func1 = function () {
  return Promise.resolve(1);
};

func2 = function (value) {
  return Promise.resolve(value + 1);
};

func3 = function (value) {
  return Promise.resolve("Error Msg");
};

let myArray = [func1, func2, func3];

let waterfall = function (arr) {
  // let currentData;
  // for (let i = 0; i < arr.length; i++) {
  //   arr[i](currentData).then((resData) => (currentData = resData));
  //   console.log(currentData);
  // }

  // return currentData;
  let i = 0;

  function resolvePromise(func, data) {
    i += 1;
    return func(data)
      .then((nextData) => {
        if (i === arr.length) {
          return nextData;
        } else {
          return resolvePromise(arr[i], nextData);
        }
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  return resolvePromise(arr[0], null);
};

console.log(waterfall(myArray));
