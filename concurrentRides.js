/**
 * Write a program that, given a list of bike rides each represented by a (start time, end time) pair,
 * prints out a timeline summary of how many concurrent rides are happening during any given
 * time interval.
 * Here is a sample input:
 * 7:13 AM, 7:23 AM
 * 6:50 AM, 7:08 AM
 * 7:10 AM, 7:30 AM
 * 6:52 AM, 7:33 AM
 * 6:58 AM, 7:23 AM
 * The output should be a list of (time interval start, time interval end, concurrent trip count) tuples,
 * as such:
 * 6:50 AM, 6:52 AM, 1
 * 6:52 AM, 6:58 AM, 2
 * 6:58 AM, 7:08 AM, 3
 * 7:08 AM, 7:10 AM, 2
 * 7:10 AM, 7:13 AM, 3
 * 7:13 AM, 7:23 AM, 4
 * 7:23 AM, 7:30 AM, 2
 * 7:30 AM, 7:33 AM, 1
 * Note that the time intervals here are sorted and continuous.
 */

/**
 * 1. Read Input and insertion sort, while creating this data structure:
 * { time: x:xx XX, ['start','end'], n}
 * time - is the start or end time
 * 'start' or 'end' - will indicate whether it is a start or end time
 * n - the occurences of this time
 * 
 */

let parseTime = (str) => {
  str.split(' ')
}


let calculateConcurrentRideList = (input) => {

}


let sampleInput = [
  ["7:13 AM", "7:23 AM"],
  ["6:50 AM", "7:08 AM"],
  ["7:10 AM", "7:30 AM"],
  ["6:52 AM", "7:33 AM"],
  ["6:58 AM", "7:23 AM"]
]

let structToBuild = [
  {time: '6:50 AM', start: 1, count:1},
  {time: '6:52 AM', start: 1, count: 1},
  {time: '6:58 AM', start: 1, count: 1},
  {time: '7:08 AM', start: 0, count:1}
];

let buildTupleList = (formattedDataStruct) => {
  let next = 0;
  let result = [];
  let count = 0;
  for(let i = 0; i < formattedDataStruct.length; i++) {
    let next = formattedDataStruct[i+1] ? next++ : false;
    let tuple;
    if(next) {
      count = x[i].start ? count + x[i].count : count - x[i].count;
      tuple = [ formattedDataStruct[i].time, formattedDataStruct[next].time, count]
      result = [...result, tuple];
    }
  }
  return result;
}

let flatten = (arr) => {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      result = [...result, ...flatten(arr[i])];
    } else {
      result = [...result, arr[i]];
    }
  }
  return result;
}















// ####################### in progress
let x = [
  {time: '6:50 AM', start: 1, count:1},
  {time: '6:52 AM', start: 1, count: 1},
  {time: '6:58 AM', start: 1, count: 1},
  {time: '7:08 AM', start: 0, count: 2}
];

let k = 0;
let result = [];
let count = 0;
for(let i = 0; i < x.length; i++) {
  let next = x[i+1] ? k++ : false;
  let tuple;
  if(k) {
    count = x[i].start ? count + x[i].count : count - x[i].count;
    tuple = [ x[i].time, x[k].time, count]
    result = [...result, tuple];
  }
}

// console.log(result);



let dataInput = [ 
  ['7:13 AM', '7:23 AM'],
  ['6:50 AM', '7:08 AM'],
  ['7:10 AM', '7:30 AM'],
  ['6:52 AM', '7:33 AM']
]

let flatten = (arr) => {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      result = [...result, ...flatten(arr[i])];
    } else {
      result = [...result, arr[i]];
    }
  }
  return result;
}

dataInput = flatten(dataInput)
console.log(dataInput);

/*
[
  {time: '6:50 AM', start: 1, count:1},
  {time: '6:52 AM', start: 1, count: 1},
  {time: '6:58 AM', start: 1, count: 1},
  {time: '7:08 AM', start: 0, count: 2}
]
*/

let compareNumbers = (num1, num2) => {
  console.log(num1, num2)
  console.log(num1 > num2);
  // if num1 is greater than num2 return 1
  // if num1 is less than num2 return 0
  // if num1 is qual to num2 return -1
  if(num1 > num2) {
    return 1;
  } else if(num1 < num2) {
    return 0;
  } else {
    return -1;
  }
}

let parseTimeAndCompare = (time1, time2) => {
  let ntime1 = time1.split(' ');
  let ntime2 = time2.split(' ');
  console.log(ntime1, ntime2)
  // if time1 is before time2 return 0
  // if time1 is after time2 return 1
  // if time1 is equal to time2 return -1
  
  // compare AM PM
  if(ntime2[1] === 'AM' && ntime1[1] === 'PM') {
    return 1;
  } else if(ntime2[1] === 'PM' && ntime1[1] === 'AM') {
    return 0;
  } else {
    // compare time
    ntime1 = ntime1[0].split(':');
    ntime2 = ntime2[0].split(':'); // ['hour', 'minute']
    
    // compare hours
    if(compareNumbers(parseInt(ntime1[0]), parseInt(ntime2[0])) === 1) {
      return 1;
    } else if(compareNumbers(ntime1[1], ntime2[1]) === 0) {
      return 0;
    } else {
      // compare minutes
    }
  }
}


let formattedSortedStruct = [];
for(let i = 0; i < dataInput.length; i++) {
  let toInsert;
  
  if(i % 2 === 0) {
    toInsert = { time: dataInput[i], start: 1, count: 1}
  } else {
    toInsert = { time: dataInput[i], start: 0, count: 1}
  }
  
  if(formattedSortedStruct.length === 0) {
    formattedSortedStruct = [toInsert];
  }
  for(let k = 0; k < formattedSortedStruct.length; k++) {
    console.log(parseTimeAndCompare(formattedSortedStruct[k].time, toInsert.time))
  }
}

console.log(formattedSortedStruct)















//######### v1.1

let x = [
  {time: '6:50 AM', start: 1, count:1},
  {time: '6:52 AM', start: 1, count: 1},
  {time: '6:58 AM', start: 1, count: 1},
  {time: '7:08 AM', start: 0, count: 2}
];

let k = 0;
let result = [];
let count = 0;
for(let i = 0; i < x.length; i++) {
  let next = x[i+1] ? k++ : false;
  let tuple;
  if(k) {
    count = x[i].start ? count + x[i].count : count - x[i].count;
    tuple = [ x[i].time, x[k].time, count]
    result = [...result, tuple];
  }
}

// console.log(result);



let dataInput = [ 
  ['7:13 AM', '7:23 AM'],
  ['6:50 AM', '7:08 AM'],
  ['7:10 AM', '7:30 AM'],
  ['6:52 AM', '7:33 AM']
]

let flatten = (arr) => {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      result = [...result, ...flatten(arr[i])];
    } else {
      result = [...result, arr[i]];
    }
  }
  return result;
}

dataInput = flatten(dataInput)
console.log(dataInput);

/*
[
  {time: '6:50 AM', start: 1, count:1},
  {time: '6:52 AM', start: 1, count: 1},
  {time: '6:58 AM', start: 1, count: 1},
  {time: '7:08 AM', start: 0, count: 2}
]
*/

let compareNumbers = (num1, num2) => {
  // if num1 is greater than num2 return 1
  // if num1 is less than num2 return 0
  // if num1 is qual to num2 return -1
  if(num1 > num2) {
    return 1;
  } else if(num1 < num2) {
    return 0;
  } else {
    return -1;
  }
}

let parseTimeAndCompare = (time1, time2) => {
  let ntime1 = time1.split(' ');
  let ntime2 = time2.split(' ');
  console.log(ntime1, ntime2)
  // if time1 is before time2 return 0
  // if time1 is after time2 return 1
  // if time1 is equal to time2 return -1
  
  // compare AM PM
  if(ntime2[1] === 'AM' && ntime1[1] === 'PM') {
    return 1;
  } else if(ntime2[1] === 'PM' && ntime1[1] === 'AM') {
    return 0;
  } else {
    // compare time
    ntime1 = ntime1[0].split(':');
    ntime2 = ntime2[0].split(':'); // ['hour', 'minute']
    
    if(compareNumbers(parseInt(ntime1[0]), parseInt(ntime2[0])) === -1) {
      // if hours are the same, compare minutes
      return compareNumbers(parseInt(ntime1[1]), parseInt(ntime2[1]));
    } else {
      // otherwise compare hours
      return compareNumbers(parseInt(ntime1[0]), parseInt(ntime2[0]));
    }
  }
}


let formattedSortedStruct = [];
for(let i = 0; i < dataInput.length; i++) {
  let toInsert;
  
  if(i % 2 === 0) {
    toInsert = { time: dataInput[i], start: 1, count: 1}
  } else {
    toInsert = { time: dataInput[i], start: 0, count: 1}
  }
  
  if(formattedSortedStruct.length === 0) {
    formattedSortedStruct = [toInsert];
  }
  for(let k = 0; k < formattedSortedStruct.length; k++) {
    console.log(parseTimeAndCompare(formattedSortedStruct[k].time, toInsert.time))
  }
}

console.log(formattedSortedStruct)















