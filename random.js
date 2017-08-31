/**
 * TODO: FIX
 * Given a directed graph, find the shortest path between 2 nodes if one exists
 */

let nodeN = {
  list: [node1, node2, ...]
}

let shortestPath = (start, end) => {
  let visitedList = [];
  let queue = [start];
  let curr;

  while(queue.length) {
    curr = queue.shift()
    if(visitedList.indexOf(queue[0]) !== -1 && queue.length === 0) {
      return null;
    } else if(visitedList.indexOf(queue[0]) !== -1 && queue.length > 0){
      break;
    }
    visitedList.push(curr);
    const endIndx = curr.list.indexOf(end);

    if(endIndx === -1) {
      for(node in curr.list) {
        queue.push(node);
      }
    } else {
      return visitedList.push(visitedList.push(endIndx));
    }
  }
  return null;
}



var func1 = function(cb) { // Make AJAX call.
  setTimeout(function() { // Wait for the internet.
    cb({name: 'Bob'}); // Return response.
  }, 500);
};

var func2 = function(cb) {
  setTimeout(function() {
    cb({name: 'Jim'});
  }, 200);
};

var func3 = function(cb) {
  setTimeout(function() {
    cb({name: 'Eli'});
  }, 100);
};


function executeAll(fcnArr, cb) {
    let result = [];
    let counter = 0;
        
    let newCb = (i) => { // I need to know the index here.
        return (arg) => {
            counter++;
            result[i] = arg;
            if(counter === fcnArr.length) { 
                cb(result);
            }
        }
    }
    
    for(let i = 0; i < fcnArr.length; i++) {

      fcnArr[i](newCb(i)) // I know the index.

    }
}

executeAll([func1, func2, func3], function(result) {console.log(result)});
// [ { name: 'Bob' }, { name: 'Jim' }, { name: 'Eli' } ]

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

