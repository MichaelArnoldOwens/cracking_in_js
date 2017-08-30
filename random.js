/**
 * Given a directed graph, find the shortest path between 2 nodes if one exists
 */

let shortestPath = (start, end) => {
  let visitedList = [];
  let queue = [start];
  let curr;

  while(queue.length) {
    curr = queue.shift()
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
