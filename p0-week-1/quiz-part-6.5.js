// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("---------- LOOPING PERTAMA (while maju) ----------");
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

console.log("---------- LOOPING KEDUA (while mundur) ----------");
let j = 5;
while (j > 0) {
  console.log(j);
  j--;
}

// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("---------- LOOPING PERTAMA (for maju) ----------");
for (let index = 0; index < 5; index++) {
  console.log(index);
}

console.log("---------- LOOPING KEDUA (for mundur) ----------");
for (let index = 5; index > 0; index--) {
  console.log(index);
}
// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

console.log("---------- Ganjil Genap ----------");
for (let index = 1; index <= 100; index++) {
  if (index % 2 === 0) console.log(`${index} : GENAP`);
  if (index % 2 === 1) console.log(`${index} : GANJIL`);
}

//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

console.log("---------- Kelipatan ----------");
for (let index = 1; index <= 100; index += 2) {
  if (index % 3 === 0) console.log(`${index} kelipatan 3`);
}
for (let index = 1; index <= 100; index += 5) {
  if (index % 6 === 0) console.log(`${index} kelipatan 6`);
}
for (let index = 1; index <= 100; index += 9) {
  if (index % 9 === 0) console.log(`${index} kelipatan 9`);
}

// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
let input = 5;
//hasilnya
//*
//**
//***
//****
//*****
for (let i = 0; i < 5; i++) {
  let tmp = "";
  for (let j = 0; j <= i; j++) {
    tmp += "*";
  }
  console.log(tmp);
}
