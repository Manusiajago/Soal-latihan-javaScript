// membuat object sederhana
// contoh membuat object : 
const myObject1 = {
    nama: 'Egal Assegaf',
    umur: 24,
    hobi: 'Coding'
};

// menampilkan object
// console.log(myObject1);
// Cara akses properti menggunakan dot notation
console.log('ini isi nama: ', myObject1.nama);
// Cara akses properti menggunakan bracket notation
console.log('ini isi nama: ', myObject1['nama']);

//operasi dasar dengan object
// 1. Menambahkan properti baru alamat
myObject1.alamat = 'JL. Cempaka';
myObject1.jurusan = 'Teknik Informatika';
myObject1.umur = 25;

for (key in myObject1) {
    console.log(`${key} : ${myObject1[key]}`);
}

console.log(myObject1);

// Function didalam object disebut method
const myName = {
    nama: 'Egal Assegaf',
    jenisKelamin: 'Laki laki',
    perkenalkan: function () {
        return `Halo nama saya ${this.nama}`;
    }
}

console.log(myName.perkenalkan());
