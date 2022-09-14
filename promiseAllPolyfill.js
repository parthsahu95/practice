let slowPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("done");
  }, 1000);
});

let myArray = [
  slowPromise,
  Promise.resolve(1),
  Promise.resolve("Hello"),
  Promise.resolve(2),
];

function promiseAll(promises) {
  const output = [];
  resolvedPromiseCount = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      promise
        .then((res) => {
          output[i] = res;
          resolvedPromiseCount++;
          if (resolvedPromiseCount === promises.length) {
            resolve(output);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

promiseAll(myArray)
  .then(console.log)
  .catch((err) => console.log(err));
