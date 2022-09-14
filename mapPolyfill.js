arr = [1, 2, 3, 4];

Array.prototype.myMap = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

newArr = arr.myMap((elem) => elem * 2);

console.log(newArr);
