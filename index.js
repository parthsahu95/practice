(function (A, B) {
  let beggarMoney = new Array(A).fill(0);
  console.log(beggarMoney);
  for (elem of B) {
    let start = elem[0] - 1;
    let end = elem[1] - 1;
    let money = elem[2];
    beggarMoney[start] += money;
    if (end < A - 1) {
      beggarMoney[end + 1] -= money;
    }
  }

  let sum = 0;
  for (let i = 0; i < beggarMoney.length; i++) {
    sum += beggarMoney[i];
    beggarMoney[i] = sum;
  }
})(5, [
  [1, 2, 10],
  [2, 3, 20],
  [2, 5, 25],
]);
