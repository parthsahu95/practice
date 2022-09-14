const myInterval = (function Interval() {
  let timer;
  return function (cmd) {
    if (cmd === "start") {
      if (timer) {
        clearInterval(timer.current);
      }
      console.log("In start: ", timer);
      timer = setInterval(() => {
        () => {};
      }, 1000);
      console.log(timer);
    } else if (cmd === "pause") {
      console.log("In pause: ", timer);

      clearInterval(timer.current);
    }
  };
})();

myInterval("start");
myInterval("pause");
