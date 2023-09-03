// function pasanganTerbesar(num) {
//   // you can only write your code here!
//   const numStr = String(num);
//   let bigNumber = 0;

//   for (let i = 0; i < numStr.length; i++) {
//     for (let j = 0; j < numStr.length; j++) {
//       const combinedNumber = numStr[i].concat(numStr[j]) * 1;
//       if (bigNumber < combinedNumber) {
//         bigNumber = combinedNumber;
//       }
//     }
//   }

//   return bigNumber;
// }
function pasanganTerbesar(num) {
  // you can only write your code here!
  const numStr = String(num);
  let bigNumber = 0;

  for (let i = 0; i < numStr.length; i++) {
    const combinedNumber = numStr[i].concat(numStr[i + 1]) * 1;
    if (bigNumber < combinedNumber) {
      bigNumber = combinedNumber;
    }
  }

  return bigNumber;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
