// Latihan 1: Tipe Data Dasar
// Buat variabel dengan tipe data berikut:
// String berisi nama Anda.
// Number berisi umur Anda.
// Boolean yang menunjukkan apakah Anda suka JavaScript.
// Null untuk variabel yang belum memiliki nilai.
// Undefined untuk variabel yang belum diinisialisasi.

const nama = 'Egal Assegaf';
const umurSaya = 23;
let apakahSukaJavascript = true;
let hobi = null;
let alamat;

console.log(nama, umurSaya, apakahSukaJavascript, hobi, alamat);

// Latihan 2: Periksa Tipe Data
// Gunakan typeof untuk memeriksa tipe data variabel berikut:
// let x = "Belajar JavaScript";
// let y = 42;
// let z = false;

let x = "Belajar Javascript";
let y = 42;
let z = false;

console.log("Cek x: ", typeof x);
console.log("Cek y: ", typeof y);
console.log("Cek z: ", typeof z);

// Latihan 3: Operasi pada Number dan String
// Lakukan operasi berikut:
// Tambahkan dua angka: 5 + 10.
// Gabungkan dua string: "Hello" + " World".
// Gabungkan string dan number: "Umur saya " + 25.

console.log("Hasil penambahan: ", 5 + 10);
console.log("Hello" + " " + "World");
console.log("Umur saya:", 25);

// Latihan 4: Boolean dan Operasi Logika
// Gunakan operator logika untuk mengevaluasi:
// true && false
// true || false
// !true

console.log('Hasil operasi AND : ', true && false);
console.log('Hasil operasi OR : ', true || false);
console.log('Hasil operasi !true', !true);

// Latihan 5: Array dan Object
// Buat array berisi 3 warna favorit Anda. Buat juga objek dengan properti:
// nama: string
// umur: number
// hobi: array berisi hobi Anda.

let myArr = ['Hijau', 'Biru', 'Kuning'];
let myArr1 = ['semangka', 'pisang', 'buahNaga', 'pepaya'];

for (let i = 0; i < myArr1.length; i++) {
    if (myArr1[i].includes('s')) {
        console.log("ini mengandung huruf S: ", myArr1[i])
    }
}
console.log(myArr);

let myObj = {
    nama: 'Zen',
    umur: 14,
    hobi: ['coding', 'game', 'bermain bola']
};

console.log(myObj);

// Latihan 6: Konversi Tipe Data
// Lakukan konversi tipe data berikut:
// Ubah string "123" menjadi number.
// Ubah number 456 menjadi string.
// Ubah string "true" menjadi boolean.

//soal 1 Ubah string menjadi number
let myString = "123456";
let myNumber = Number(myString);

//soal 2 Ubah number menjadi string
let myNumber2 = 456;
let convertToStr = String(myNumber2);

console.log('Hasil konversi: ', myNumber);
console.log('Hasil konversi: ', convertToStr);

// Latihan 7: Template Literal
// Gunakan template literal untuk membuat kalimat:
// Nama Anda, umur Anda, dan hobi Anda.

const myNama = "Egal Assegaf";
const myAge = 21;
const myHobbies = "Coding";

console.log(`Nama saya: ${myNama}, umur saya: ${myAge}, myHobbies: ${myHobbies}`);