//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  const dictionary = "abcdefghijklmnopqrstuvwxyz";
  let tmp = "";
  for (let i = 0; i < kalimat.length; i++) {
    const element = kalimat[i];
    if (dictionary.includes(element)) {
      if (element == element.toUpperCase()) {
        tmp += element.toLowerCase();
      }
      if (element == element.toLowerCase()) {
        tmp += element.toUpperCase();
      }
    } else {
      tmp += element;
    }
  }

  return tmp;
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
