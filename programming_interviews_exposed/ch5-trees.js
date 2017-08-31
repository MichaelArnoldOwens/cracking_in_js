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

let DFS = (root, val) => {
  if(root === null) {
    return null;
  }
  if(root.val === val) {
    return root;
  }
  DFS(root.left, val);
  DFS(root.right, val);
}

let preOrder = (root) => {
  if(root === null) {
    return null;
  }
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
}

let inOrder = (root) => {
  if(root === null) {
    return null;
  }
  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
}

let postOrder = (root) => {
  if(root === null) {
    return null;
  }
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
}

let getTreeHeight = (root) => {
  if(root === null) {
    return null;
  }
  return 1 + Math.max(getTreeHeight(root.left), getTreeHeight(root.right));
}

let findLowestCommonAncestor = (root, val1, val2) {
  const val = root.val;
  while(root != null) {
    if(val > val1 && val > val2) {
      root = root.left;
    } else if(val < val1 && val < val2) {
      root = root.right;
    } else {
      return root;
    }
  }
  return null;
}
