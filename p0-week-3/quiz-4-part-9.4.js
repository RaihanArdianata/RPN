/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(num) {
  // you can only write your code here!
  let posisiA = [];
  let posisiB = [];

  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element === "a") posisiA.push(i);
    if (element === "b") posisiB.push(i);
  }

  return checkPosisi(posisiA, posisiB);
}

function checkPosisi(array1, array2) {
  let moreThanOne = false;

  for (let i = 0; i < array1.length; i++) {
    const element1 = array1[i];
    for (let j = 0; j < array2.length; j++) {
      const element2 = array2[j];
      if (Math.abs(element1 - element2) > 1) {
        moreThanOne = true;
        continue;
      }
    }

    if (moreThanOne) {
      continue;
    }
  }

  return moreThanOne;
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB("bacon and meat")); // false //ada pertanyaan di sini
