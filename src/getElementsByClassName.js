// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var results = [];

  const traverseNodes = (node) => {
    var list = node.classList;
    if (list && list.contains(className)) {
      results.push(node);
    }
    node.forEach(traverseNodes);
  };
  
  traverseNodes(document.body);
  return results;
};
