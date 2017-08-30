/**
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
