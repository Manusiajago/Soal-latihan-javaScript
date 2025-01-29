// Membuat Function contoh sederhana atau simple saja dahulu
// Step membuat fungsi : 
// 1. inisialisasi nama fungsi
// 2. lalu panggil nama fungsi

// catatan : penamaan variabel bebas seterah anda semua : ) 

// Inisialisasi fungsi : 
function namaFungsi() {
    console.log("Hello saya fungsi yg baru saja dibuat");
};

// panggil fungsi: 
namaFungsi()

// 2 . Fungsi ekspresi, fungsi yg di simpan di dalam variabel
const myFungsi = function () {
    console.log("Halo saya fungsi yang dibuat dalam fungsi ekspresi");
}

// Kita juga bisa memanggil fungsi yg di simpan di dalam variabel, lalu panggil variabelnya
const panggilFunc = myFungsi();
console.log(panggilFunc);

// 3. Arrow Function / fungsi yg lebih modern 
const myFunctionArrow = () => {
    console.log("Halo saya fungsi arrow function");
};

myFunctionArrow();

// Contoh diatas adalah fungsi tanpa parameter/ oke cool saya akan mengulanginya lagi dibawah : 
function sayHello() {
    console.log("Hello World!");
}

sayHello();

// Kali ini kita akan membuat fungsi dengan parameter : 
function tambahAngka(a, b) {
    return a + b;
}

// Kita panggil fungsi ini dengan parameter 5 dan 10
const hasil = tambahAngka(5, 10);
console.log("Ini adalah hasilnya: ", hasil);
// Buka inspect browser lalu buka console dan lihat hasilnya :V 

// Kita juga bisa mendklarasikan variabel di dalam parameter, lah kok bisa? yaudah liat dulu cuy
function panggilSaya(nama = 'Egal') {
    return `Halo nama saya ${nama}`;
}

const defaultValue = panggilSaya();
const resultValue = panggilSaya('Egal Assegaf');

console.log('Hasil default value: ', defaultValue);
console.log('Hasil default value: ', resultValue);

// 1. Latihan 1 : 
function perkalian(a, b) {
    return a * b;
}

const hasilPerkalian = perkalian(2, 2);
console.log("Hasilnya adalah: ", hasilPerkalian);

// Latihan 2 
function cekGanjilGenap(number) {
    if (number % 2 === 0) {
        console.log("angka ini genap")
    } else if (number % 2 === 1) {
        console.log("angka ini ganjil");
    }

    return;

}

const GenapNumber = cekGanjilGenap(10);
const ganjilNumber = cekGanjilGenap(9);

// Latihan 3
const sayHelloMyFriend = (name) => {
    return `Halo ${name}`
};

const helloFriend = sayHelloMyFriend('Andi');
console.log(helloFriend);