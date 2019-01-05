const mySetInterval = (func, delay, ...args) => {
  const intervalID = mySetInterval.intervalID = mySetInterval.intervalID || 0;
  mySetInterval.timers = mySetInterval.timers || {};
  let timeoutID = 0;

  const cb = () => {
      func(...args);
      timeoutID = setTimeout(cb, delay);
      mySetInterval.timers[intervalID] = timeoutID;
  };
  
  timeoutID = setTimeout(cb, delay);
  mySetInterval.timers[intervalID] = timeoutID;
  return mySetInterval.intervalID++;
};

const myClearInterval = (intervalID) => {
  clearInterval(mySetInterval.timers[intervalID]);
};

const x = mySetInterval(() => console.log('called3'), 3000);
const y = mySetInterval(() => console.log('called1'), 1000);

setTimeout(()=> {myClearInterval(x); myClearInterval(y);}, 6000)