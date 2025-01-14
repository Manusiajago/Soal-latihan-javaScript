Operator perbandingan digunakan untuk membandingkan dua nilai dalam JavaScript. Hasil dari operator ini selalu berupa boolean: true atau false. Berikut penjelasan lengkapnya, disertai latihan untuk memperkuat pemahaman.

Jenis Operator Perbandingan
Operator	Deskripsi	Contoh (a = 5, b = 10)	Hasil
==	Sama dengan (nilai saja)	a == b	false
===	Sama dengan (nilai dan tipe data)	a === '5'	false
!=	Tidak sama dengan (nilai saja)	a != b	true
!==	Tidak sama dengan (nilai dan tipe data)	a !== '5'	true
>	Lebih besar	b > a	true
<	Lebih kecil	a < b	true
>=	Lebih besar atau sama dengan	a >= 5	true
<=	Lebih kecil atau sama dengan	b <= 10	true
Contoh Penggunaan
javascript

let x = 7;
let y = 10;

console.log(x > y);  // false
console.log(x < y);  // true
console.log(x >= 7); // true
console.log(x === '7'); // false (tipe data berbeda)
console.log(x == '7');  // true (nilai sama meskipun tipe berbeda)
Tips Penting
Gunakan === dan !==: Lebih dianjurkan untuk membandingkan nilai dan tipe data agar hasilnya akurat.

javascript
Salin kode
console.log(5 == '5');  // true
console.log(5 === '5'); // false
Perhatikan tipe data yang dibandingkan: Operator perbandingan otomatis mengonversi tipe data jika hanya menggunakan == atau !=.

javascript
console.log(null == undefined);  // true
console.log(null === undefined); // false