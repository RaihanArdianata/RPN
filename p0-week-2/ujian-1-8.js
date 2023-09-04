/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  let jarakTerdekat;
  let posisiX = [];
  let posisiO = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element === "x") posisiX.push(i);
    if (element === "o") posisiO = i;
  }

  if (posisiX.length > 0) {
    for (let i = 0; i < posisiX.length; i++) {
      const element = posisiX[i];
      const selisih = Math.abs(element - posisiO);

      if (jarakTerdekat >= selisih || jarakTerdekat === undefined) {
        jarakTerdekat = selisih;
      }
    }
  } else {
    jarakTerdekat = posisiX.length;
  }
  return jarakTerdekat;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
