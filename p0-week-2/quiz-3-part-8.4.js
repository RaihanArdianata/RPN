function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  let word = "";
  let wordArr = [];
  for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] !== " ") {
      word += kalimat[i];

      if (i === kalimat.length - 1) {
        wordArr.push(word);
      }
    }

    if (word !== "" && kalimat[i] === " ") {
      wordArr.push(word);
      word = "";
    }
  }

  return { wordArr };
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
