// Operator perbandingan 
// example
let x = 20;
let y = 30;

console.log(x > y);
console.log(x < y);
console.log(x == y);
console.log(x === y);
console.log(x !== y);

// Buat program sederhana yang meminta pengguna memasukkan usia.
// Gunakan operator perbandingan untuk menentukan apakah usia tersebut tergolong anak-anak (di bawah 13), remaja (13–19), atau dewasa (20+).
// Tampilkan hasilnya menggunakan alert.

let answer = prompt("Masukkan usia anda: ");

if (answer < 13) {
    alert(`Dia adalah anak anak!`)
} else if (answer >= 13 && answer <= 19) {
    alert(`Dia adalah remaja`)
} else {
    alert(`Dia adalah orang dewasa!`);
}


// latihan soal: Nested If
// Buat program untuk mengecek apakah sebuah angka genap atau ganjil, dan apakah angka tersebut lebih besar dari 10 atau tidak.

let angka = prompt("Masukkan angka : ");

if (!isNaN(angka)) {
    if (angka % 2 === 0) {
        if (angka > 10) {
            alert("Angka tersebut genap dan lebih besar dari 10.");
        } else {
            alert("Angka tersebut genap dan kurang dari atau sama dengan 10.");
        }
    } else {
        if (number > 10) {
            alert("Angka tersebut ganjil dan lebih besar dari 10.");
        } else {
            alert(`Angka tersebut ganjil dan kurang dari sepuluh`)
        }
    }
} else {
    alert("Masukkan angka yang valid!")
}


// Sumber referensi W3SCHOOL mengenai operator perbandingan



