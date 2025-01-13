// Fungsi alert(), prompt(), dan confirm() adalah metode bawaan JavaScript yang digunakan untuk berinteraksi dengan pengguna melalui dialog (pop-up). Berikut penjelasan dan contoh lengkapnya:

// 1. Alert()
alert('Ini adalah pesan alert!');
alert('selamat datang di javaScript');

// 2. prompt()
// Fungsi:

// Menampilkan dialog untuk meminta input dari pengguna.
// Memiliki kolom input teks, tombol "OK", dan tombol "Cancel".
// Jika pengguna menekan "OK", nilai input dikembalikan. Jika "Cancel" ditekan, mengembalikan null.

let nama = prompt("Masukkan nama anda: ");
let myAge = prompt("Masukkan umur kamu: ")

if (nama && myAge) {
    alert(`Selamat datang ${nama}, umur kamu: ${myAge}`);
} else if (nama) {
    alert(`Selamat datang ${nama}`);
} else if (myAge) {
    alert(`Umur kamu : ${myAge}`);
} else {
    alert("Anda belum mengisi nama atau umur");
}

// Soal 2
// Buat program yang meminta nama pengguna menggunakan prompt(), lalu tampilkan nama tersebut dalam pesan alert().

let namaOrang = prompt(`Masukkan nama anda: `);

if (namaOrang) {
    alert(`Selamat datang ${namaOrang}`);
}

// Soal 3
// Buat program menggunakan confirm() untuk meminta pengguna memastikan apakah mereka ingin menghapus data. Jika "OK" dipilih, tampilkan pesan "Data dihapus!". Jika "Cancel", tampilkan pesan "Aksi dibatalkan!".

let yakin = confirm("Apakah kamu ingin menghapus? : ")

if (yakin) {
    alert("Data berhasil dihapus!");
} else {
    alert(`Data tidak dihapus`);
}

// Soal 4
// Gabungkan ketiganya. Tampilkan dialog prompt() untuk meminta nama, gunakan confirm() untuk konfirmasi, lalu tampilkan hasilnya dengan alert().

// let person = prompt("Masukkan nama kamu: ");

// if (person) {
//     let confirmData = confirm(`Apakah nama kamu benar ${person}?`);
//     if (confirmData) {
//         alert(`Kamu berhasil masuk ${person}`);
//     } else {
//         alert(`Silahlan masukkan ulang nama kamu!`)
//     }
// } else {
//     alert("Anda belum mengisi nama");
// }


let person;

do {
    person = prompt(`Masukkan nama anda : `);

    if (!person) {
        alert(`Anda belum mengisi nama`);
    } else {
        confirmPerson = confirm(`Apakah nama anda benar ${person}? `);
        if (confirmPerson) {
            alert(`Kamu berhasil login ${person}`);
            break;
        } else {
            alert(`Silahkan masukkan ulang nama kamu!`);
        }
    }
}
while (true);

