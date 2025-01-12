// latihan pertama menampilkan nama dan umur
const namaSaya = 'Egal Assegaf';
const umurSaya = 25;

console.log(`Nama saya ${namaSaya} umur saya ${umurSaya}`);

//menampilkan di halaman
document.write(`halo nama saya ${namaSaya} , umur saya ${umurSaya}`);

const murid1 = "aldi syahputra";
const umur1 = 23;
let jurusan = "Teknik Informatika";
let namaKampus = "Unindra";

//menggunakan console.log();
console.log(`Halo nama saya ${murid1}, umur saya ${umur1}, jurusan saya adalah: ${jurusan}, asal kampus saya ${namaKampus}`);

//menggunakan document.write();
document.write(`Halo nama saya ${murid1}, umur saya ${umur1}, jurusan saya adalah: ${jurusan}, nama kampus saya ${namaKampus}`);


// praktek ke 2 penjumlahan sederhana

// deklarasi variabel 
let angka1 = 23;
let angka2 = 27;

let hasil = angka1 + angka2;

// menampilkan hasil penjumlahan di console.log()
console.log("Hasil penjumlahan: " + hasil);

// menampilkan hasil penjumlahan di document.write()
document.write(`Hasil penjumlahan 23 + 27 = ${hasil}`);


// Perbandingan angka 
let perbandinganAngka1 = 35;
let perbandinganAngka2 = 12;

let hasilPerbandingan = perbandinganAngka1 > perbandinganAngka2;

// menampilkan hasil perbandingan di console.log()
console.log(`Hasil perbandingan: ${hasilPerbandingan}`)

//menggunakan document.write();
document.write(`Hasil perbandingan: ${hasilPerbandingan}`)

// Loop dan array (bonus tambahan)
let namaMurid = ['Aldi', 'Egal', 'Kahfi', 'Arga', 'salsa'];

//menampilkan nama nama murid
console.log(`Daftar murid: `)
for (let i = 0; i < namaMurid.length; i++) {
    console.log(namaMurid[i]);
}

//menampilkan menggunakan document.write()
document.write(`<ul>`)

for (let i = 0; i < namaMurid.length; i++) {
    document.write(`<li>${namaMurid[i]}</li>`)
}

document.write(`</ul>`)

