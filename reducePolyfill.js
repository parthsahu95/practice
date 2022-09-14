let arr = [1, 2, 3, 4];

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    acc = acc != undefined ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

let reducedArray = arr.myReduce((acc, elem) => acc + elem, 0);
console.log(reducedArray);
