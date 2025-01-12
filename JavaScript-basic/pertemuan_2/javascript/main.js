// // Perbedaan let dan var di dalam block scope
// {
//     let x = 10; // Deklarasi menggunakan let
//     var y = 20; // Deklarasi menggunakan var
// }

// // Coba akses di luar blok
// console.log(x); // Error: x is not defined
// console.log(y); // Output: 20

// Soal 2: const untuk Nilai Tetap
// Deklarasikan variabel PI menggunakan const dengan nilai 3.14.
// Coba ubah nilai PI menjadi 3.14159.
// Tampilkan error yang terjadi di console.

const PI = 3.14;
console.log(`Nilai PI saat ini: ${PI}`);



// penjelasan variabel yang di deklarasikan dengan konstant atau const tidak dapat diubah nilainya 

// Soal 4: Re-deklarasi Variabel
// Deklarasikan variabel z menggunakan var dan beri nilai awal 5.
// Deklarasikan kembali z menggunakan var dan beri nilai baru 10.
// Ulangi langkah tersebut dengan let dan const.
// Tampilkan hasilnya di console.

//menggunakan VAR
var x = 5;
var x = 10;

console.log(x); // Output: 10

//menggunakan let 
// let y = 'aldi';
// let y = 'cica'; penulisan ini salah, tidak usah deklarasikan lagi menggunakan let

// ini yg benar : 
let y = 'aldi';
y = 'cica';

console.log(y);

//menggunakan const 
// const b = 10;
// const b = 11; penulisan ini salah

// seperti ini juga salah : 
// const b = 10;
// b = 12; alasannya karena konstanta nilainya tetap, tidak bisa diubah. 

// yang benar : 
const b = 10;

console.log(b);

// Soal 5: Variabel dalam Loop
// Gunakan var untuk mendeklarasikan variabel penghitung di dalam loop for.
// Gunakan let untuk mendeklarasikan variabel penghitung di dalam loop for.
// Tampilkan nilai penghitung setelah loop selesai menggunakan console.log().

// dengan var
for (var i = 0; i < 20; i++) {
    console.log("Dalam loop Var", i)
}

//dengan let 
for (let i = 0; i < 20; i++) {
    console.log("Dalam loop let", i);
}



