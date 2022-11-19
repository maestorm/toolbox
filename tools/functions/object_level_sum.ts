const obj = {
  value:1,
  children: [{
    value: 5,
    children: [{
      value: 9,
      children: []
    }]
  },{
    value: 2,
    children: [{
      value: 1,
      children: [{
        value: 7,
        children: []
      }]
     },{
      value: 3,
      children: []
    }]
  }]
}

export getSumArr = (tree, count) => {
  if (Array.isArray(tree)) {
    return tree.flatMap(item => getSumArr(item, count))
  }
  if(count === 0) return tree.value;  // returns value
  return getSumArr(tree.children, count-1);
}

const getSum = (node, level = 0) => {
  //return getSumArr(node, level).reduce((acc, curr) => acc + curr, 0);
  return level === 0 ? node.value : eval(getSumArr(node,level).join("+"));
}
