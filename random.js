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






function parseQueryString(query) {
  let parseQuery = query.substring(1).split('&');
  console.log(parseQuery)
  let json = {};
  for(let i in parseQuery) {
      let splitParams = parseQuery[i].split('=');
      // [key, value] || [key]
      if(splitParams.length === 2) {
          checkExistingProp(json, splitParams)
      } else {
          if(json.hasOwnProperty(splitParams[0])) {
              console.log('splitParams in single: ', splitParams)
              let arr = [];
              if(Array.isArray(json[splitParams[0]])) {
                  arr.push(json[splitParam[0]])
              }
//                 arr = [json[splitParams[0]]];
              json[splitParams[0]] = [...arr, true]
          } else {
              json[splitParams[0]] = true;                
          }
          
      }
      
  }
  
  return json;
}

// you dropped out of the hangouts call. Should just be a few more min
// you dropped out of the hangouts call. Should just be a few more min
// you dropped out of the hangouts call. Should just be a few more min
// you dropped out of the hangouts call. Should just be a few more min

// Array.isArray(...)

let checkExistingProp = (json, splitParams) => {
  console.log('splitParams in double: ', splitParams)
  if(json.hasOwnProperty(splitParams[0])) {
      let arr = [];
      if(Array.isArray(json[splitParams[0]])) {
          arr.push(json[splitParams[0]])   
      }
//         arr = [json[splitParams[0]]];
      console.log('arr: ', arr)
      json[splitParams[0]] = [...arr, splitParams[1]]
   } else {
      json[splitParams[0]] = splitParams[1]; 
  }
  return json;
}

// -> {foo: "hello", bar: "world", baz: [true, "again"]}
console.log(parseQueryString('?foo=hello&baz&bar=world&baz=again&baz=3'));

let insertSort = (arr) => {
  let result = [arr[0]];
  for(let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    for(let k = 0; k < result.length; k++) {
      if(curr < result[k]) {
        result.splice(k, 0, curr);
        break;
      }
    }
  }
  return result;
}

let arr2 = [20, 2, 4, 3, 7, 21, 2, 1];
console.log(insertSort(arr2))