// Conditional statements

// if (kondisi) {
//     //blok kode jika benar
// } else {
//     // blok kode jika kondisi salah
// }

// // Ternary Operator
// let hasil = kondisi ? nilaiJikaBenar : nilaiJikaSalah;

// Soal Latihan
// Soal 1: Gunakan if...else
// Tuliskan program untuk mengecek apakah sebuah angka positif, negatif, atau nol.

// let inputUser = prompt('Masukkan angka: ');

// if (inputUser > 0) {
//     alert('Angka tersebut positif');
// } else if (inputUser < 0) {
//     alert(`Angka tersebut negatif`);
// } else {
//     alert(`Masukkan angka yang valid!`);
// }

// Soal 2: Gunakan Ternary Operator
// Tuliskan program untuk mengecek apakah angka ganjil atau genap menggunakan ternary operator.

// let inputUser2 = prompt("Masukkan angka: ");

// let cekBilanganGenap = (inputUser2 % 2 === 0) ? "Bilangan tersebut genap" : "bilangan tersebut ganjil";
// alert(`${cekBilanganGenap}`);

// Soal 3: Kombinasi if...else dan Ternary
// Tuliskan program untuk mengecek:

// Jika umur pengguna di atas 18, tampilkan "Kamu sudah dewasa."
// Jika umur antara 13 dan 18, tampilkan "Kamu remaja."
// Jika umur di bawah 13, tampilkan "Kamu anak-anak." Gunakan if...else di satu bagian dan ternary operator di bagian lain.

// let inputAge = prompt("Masukkan umur: ");
// let angka = Number(inputAge);

// if (angka > 18) {
//     console.log(`Kamu sudah dewasa`);
// } else {
//     let kategori = angka >= 13 ? "Kamu remaja" : "Kamu anak anak";
//     console.log(kategori)
// }

// Soal 4: Nested Ternary Operator
// Cek apakah angka:

// Positif: Jika angka genap → "Positif dan Genap", jika ganjil → "Positif dan Ganjil".
// Negatif: Jika angka genap → "Negatif dan Genap", jika ganjil → "Negatif dan Ganjil".
// Nol: "Angka adalah nol."

let inputUser = prompt("Masukkan angka: ");

let angka = Number(inputUser);

let hasil = angka > 0 ? angka % 2 === 0 ? "Positif dan genap" : "Positif dan ganjil" : angka < 0 ? angka % 2 === 0 ? "Negatif dan genap" : "Negatif dan ganjil" : "angka adalah nol";
console.log(hasil);
