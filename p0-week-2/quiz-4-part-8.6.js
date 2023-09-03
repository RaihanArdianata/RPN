function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  let isDeret = true;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (i + 1 !== arr.length && element * ratio(arr) !== arr[i + 1]) {
      isDeret = false;
      continue;
    }
  }

  return isDeret;
}

function ratio(arr) {
  return arr[1] / arr[0];
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
