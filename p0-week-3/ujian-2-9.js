/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  const result = [];
  for (const item of arrPenumpang) {
    const [name, start, finish] = item;
    let isStart = false;
    const profile = {
      penumpang: name,
      naikDari: start,
      tujuan: finish,
      bayar: 0,
    };
    for (const item2 of rute) {
      if (start === item2) {
        isStart = true;
      }

      if (isStart) {
        if (finish === item2) {
          isStart = false;
        } else {
          profile.bayar += 2000;
        }
      }
    }
    result.push(profile);
  }

  return result;
}

//TEST CASE
console.log(
  naikAngkot([
    // ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ]),
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
