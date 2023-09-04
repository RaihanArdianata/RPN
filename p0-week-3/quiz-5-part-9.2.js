//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  const dictionary = "abcdefghijklmnopqrstuvwxyz";
  let tmp = "";
  for (let i = 0; i < kata.length; i++) {
    const element = kata[i];
    tmp +=
      dictionary[
        dictionary.indexOf(element) + 1 === dictionary.length ? 0 : dictionary.indexOf(element) + 1
      ];
  }

  return tmp;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
