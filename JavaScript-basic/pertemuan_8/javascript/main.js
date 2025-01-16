
// Logical Operators:
// AND (&&)

// Mengembalikan true jika semua kondisi bernilai true.
// Contoh:
// javascript
// Salin
// Edit
// true && true; // true
// true && false; // false
// OR (||)

// Mengembalikan true jika salah satu kondisi bernilai true.
// Contoh:
// javascript
// Salin
// Edit
// true || false; // true
// false || false; // false
// NOT (!)

// Membalik nilai boolean: true jadi false, false jadi true.
// Contoh:
// javascript
// Salin
// Edit
// !true; // false
// !false; // true

// Soal 1: AND (&&)
// Cek apakah dua angka adalah bilangan genap. Jika ya, tampilkan "Kedua angka adalah genap." Jika tidak, tampilkan "Salah satu atau kedua angka tidak genap."

// let angka1 = prompt('Masukkan Angka yg pertama : ');
// let angka2 = prompt("Masukkan Angka yg kedua : ")

// let num1 = Number(angka1)
// let num2 = Number(angka2)

// function cekBilanganGenap(num1, num2) {
//     if (num1 % 2 === 0 && num2 % 2 === 0) {
//         console.log(`Kedua angka yang anda masukkan bernilai genap`);
//     } else {
//         console.log(`Salah satu angka yang anda masukkan tidak bernilai genap`);
//     }

//     return;
// }

// const run = cekBilanganGenap(num1, num2);
// console.log(run);


// Soal 2: OR (||)
// Buat program untuk mengecek apakah seseorang memenuhi salah satu dari dua kriteria:

// Umur di atas 18.
// Memiliki kartu pelajar.
// Tampilkan pesan:

// "Akses diperbolehkan" jika memenuhi salah satu kriteria.
// "Akses ditolak" jika tidak.

// let personAge = prompt("Masukkan umur anda: ");
// let punyaKartuPelajar = confirm('Apakah anda memiliki kartu pelajar? ');

// let age = Number(personAge);

// function cekAkses(age, punyaKartuPelajar) {
//     if (age > 18 || punyaKartuPelajar) {
//         alert(`Akses diperbolehkan!`)
//     } else {
//         alert(`Akses ditolak!`)
//     }

//     return;
// }

// const run2 = cekAkses(age, punyaKartuPelajar);
// console.log(run2);

// Soal 3: NOT (!)
// Buat program yang meminta pengguna memasukkan angka. Jika angka tersebut bukan angka (NaN), tampilkan pesan "Input bukan angka!"

// let inputNumber = prompt('Masukkan angka : ');


// if (!isNaN(inputNumber)) {
//     console.log(`Angka yang anda masukkan adalah ${inputNumber}`);
// } else {
//     console.log('Input bukan angka!');
// }

// Soal 4: Gabungan AND, OR, dan NOT
// Buat program untuk mengecek:

// Jika angka lebih besar dari 10 dan genap → Tampilkan "Angka besar dan genap."
// Jika angka lebih besar dari 10 tapi tidak genap → Tampilkan "Angka besar tapi ganjil."
// Jika angka kurang dari atau sama dengan 10 → Tampilkan "Angka kecil."

let inputNumber = prompt('Masukkan angka : ');
let number1 = Number(inputNumber);

function checkNumber(number) {
    if (number > 10 && number % 2 === 0) {
        console.log(`Angka besar dan genap`);
    } else if (number > 10 && number % 2 === 1) {
        console.log(`Angka besar tapi ganjil`);
    } else if (number < 10 && number === 10) {
        console.log(`Angka kecil`);
    } else {
        console.log(`Input bukan angka!`);
    }

    return;
}

const run4 = checkNumber(number1);
console.log(run4);