let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input = []) {
  const months = [
    "januari",
    "februari",
    "maret",
    "april",
    "mei",
    "juni",
    "juli",
    "agustus",
    "september",
    "oktober",
    "november",
    "desember",
  ];
  // hapus 1 nulai index ke 4
  input.splice(4, 1, "Pria", "SMA Internasional Metro");
  input.splice(1, 1, `${input[1]}Elsharawy`);
  // split date
  const [day, month, year] = input[3].split("/");

  // result
  console.log(input);
  console.log(months[month - 1]);
  console.log([year, day, month]);
  console.log(input[3].split("/").join("-"));
  console.log(input[1].slice(0, 15));
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
