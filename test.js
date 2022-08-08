function sum(a, b) {
  return a + b;
}

function bindFunction(fn, ...args) {
  return fn.bind(null, ...args);
}

const newSum = bindFunction(sum, 2, 4);

console.log(newSum());
