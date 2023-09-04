//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  // you can only write your code here!
  const persekutuan1 = [];
  const persekutuan2 = [];

  let faktor1 = 1;
  let faktor2 = 1;

  while (faktor1 <= angka1) {
    for (let i = 1; i <= angka1; i++) {
      if (faktor1 * i === angka1) {
        if (!persekutuan1.includes(i)) {
          persekutuan1.push(faktor1);
          persekutuan1.push(i);
        }
        continue;
      }
    }
    faktor1++;
  }

  while (faktor2 <= angka2) {
    for (let i = 1; i <= angka2; i++) {
      if (faktor2 * i === angka2) {
        if (!persekutuan2.includes(i)) {
          persekutuan2.push(faktor2);
          persekutuan2.push(i);
        }
        continue;
      }
    }
    faktor2++;
  }
  console.log(persekutuan1);
  return irisan(persekutuan1, persekutuan2)[irisan(persekutuan1, persekutuan2).length - 1];
}

function irisan(array1 = [], array2 = []) {
  return array1.filter((item) => array2.includes(item)).sort((a, b) => a - b);
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
