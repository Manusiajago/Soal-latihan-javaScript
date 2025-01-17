// // 1. For Loop
// Paling dasar dan sering digunakan. Cocok kalau kita tahu jumlah iterasi yang pasti.

// Sintaks:
// for (let i = 0 ; i < 10 ; i ++ ) {
//     // Kode yang akan di eksekusi
// }

// Contoh cetak angka 1 sampai 5
// let stateEnd = 5;

// for (let i = 0 + 1; i <= stateEnd; i++) {
//     console.log(`Pengulangan ke ${i}`)
// }

// while loop
// Cocok digunakan kalau jumlah iterasi tidak pasti, tapi kita tahu kondisi yang harus dipenuhi.
// // contoh sintaks :

// while (kondisi) {
//     // Kode yang akan di eksekusi
// }

// Contoh: mencetak angka 1 sampai 5
// let i = 0;
// while (i <= 5) {
//     console.log(`Pengulangan ke ${i}`)
//     i++
// }

// 3. Do...While Loop
// Mirip while, tapi kode dijalankan setidaknya satu kali sebelum mengecek kondisi.

// Sintaks:
// do {
//     // kode yg akan dijalankan
//  } while (kondisi)

// Contoh: Minta user memasukkan angka hingga memasukkan angka lebih besar dari 10.

// let angka;

// do {
//     angka = Number(prompt('Masukkan angka: '));
// } while (angka <= 10);

// console.log(`Angka yang dimasukkan: ${angka}`);

// 4. For...Of
// Digunakan untuk mengulang nilai dari array atau iterable lainnya.

// Sintaks:
// for (const item of iterable) {
//     //kode yg akan dijalankan
// }

//contoh cetak setiap nama dari array

// const namaSiswa = ['arga', 'salsa', 'bila', 'rama', 'adel', 'egal'];

// //ulangi array
// for (const target of namaSiswa) {
//     console.log(target);
// }

// // mencari yg mengandung huruf s
// for (const e of namaSiswa) {
//     if (e.includes('s')) {
//         console.log(`${e} mengandung huruf s`);
//     } else {
//         console.log(`${e} tidak mengandung huruf s`);
//     }
// }

// 5. For...In
// Digunakan untuk mengulang key/nama properti dari objek.

// // Sintaks:

// for (const key in objek) {
//     // kode yg akan dijalankan
// }

// contoh :
// let namaMhs = {
//     nama: 'Egal Assegaf',
//     umur: 24,
//     jenisKelamin: 'Laki-laki',
//     jurusan: 'Teknik Informatika'
// };

// for (const target in namaMhs) {
//     console.log(`${target} : ${namaMhs[target]}`)
// }

// Soal Latihan + Jawaban
// Soal 1: For Loop
// Buat program untuk mencetak bilangan ganjil dari 1 sampai 10.

// Jawaban 1:

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 1) {
//         console.log(`Bilangan ganjil: ${i}`);
//     }
// }

// Soal 2: While Loop
// Buat program untuk menghitung total angka dari 1 sampai n (input dari user).

// let n = Number(prompt('Masukkan angka: '));
// let total = 0;
// let i = 1;

// while (i <= n) {
//     total += i;
//     i++;
// }

// console.log(`Total angka ${total}`);

// Soal 3: Do...While Loop
// Buat program yang meminta user menebak angka rahasia (misalnya angkaRahasia = 7) hingga benar.

// let angkaRahasia = 7;
// let tebakan;

// do {
//     tebakan = Number(prompt('Masukkan angka tebakkan anda! : '));
// } while (tebakan !== angkaRahasia);

// console.log('Selamat, anda berhasil menebak!');

// Soal 4: For...Of
// Cetak setiap huruf dalam string "Zen Rules!".

let teks = "Hello world!";

for (target of teks) {
    console.log(`Huruf ${target}`);
}

// Soal 5: For...In
// Buat program untuk mencetak semua properti dan nilai dalam objek mobil.

const myCar = {
    merek: 'Toyota',
    model: 'Corolla',
    tahun: 2021,
    warna: 'Merah'
}

for (let key in myCar) {
    console.log(`${key} : ${myCar[key]}`);
}
