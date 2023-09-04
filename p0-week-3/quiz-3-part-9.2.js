function cariMedian(arr) {
  // you can only write your code here!
  const sort = arr.sort((a, b) => a - b);
  let result = 0;

  // jika ganjil
  if (sort.length % 2 == 1) {
    const median = (sort.length + 1) / 2;
    return sort[median - 1];
  }

  // jika genap
  if (sort.length % 2 == 0) {
    const median = sort.length / 2;
    return (sort[median - 1] + sort[median]) / 2;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
