

var sumNumbers = function(root, subsum = 0) {
  let paths = getPaths(root);
  let sum = 0;
  paths.forEach(path => {
    sum += parseInt(path.join(""));
  });

  return sum;
};

var getPaths = function(root, currentPath = [], allPaths = []) {
  console.log("root", root);
  console.log("currentPath", currentPath);

  if (!root) {
    return;
  }

  currentPath.push(root.val);
  if (!root.left && !root.right) {
    allPaths.push(currentPath);
    currentPath.pop();
    return allPaths;
  }

  getPaths(root.left, currentPath, allPaths);
  getPaths(root.right, currentPath, allPaths);

  return allPaths;
};

let root = TreeNode(1);
root.left = TreeNode(2);
root.right = TreeNode(3);

console.log(sumNumbers([1, 2, 3]));