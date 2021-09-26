function returnEvens(x, y) {
  const evens = [];
  for (let i = x; i < y; i++) {
    if (i % 2 == 0) evens.push(i);
  };
  return evens
}

const result = returnEvens(1, 11);
console.log(result);