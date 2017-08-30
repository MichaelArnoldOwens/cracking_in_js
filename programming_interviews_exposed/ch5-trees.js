/**
 * Trees
 */

let findBSTNode = (root, val) {
  if(root === null) {
    return null;
  }
  const currVal = root.val;
  if(currVal === val) {
    return root;
  }
  if(currVal > val) {
    return findBSTNode(root.left, val);
  } else {
    return findBSTNode(root.right, val)
  }
}

let BFS = (root, val) => {
  let queue = [root];
  let currNode;
  let currVal;
  while(queue.length !== 0){ 
    currNode = queue.shift();
    currVal = currNode.val;
    if(currVal === val) {
      return currNode;
    }
    for(child in currNode.children) {
      queue.push(child);
    }
  }
  return null;
}