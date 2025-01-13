// Jenis Konversi Tipe Data

// Konversi manual
// menggunakan String atau toString()

// example : 
let num = 456;
let str = String(num);
let str2 = num.toString();

console.log(str);
console.log(str2);

// konversi string ke number
let strr1 = "1234";
let toNumber = Number(strr1);

let strr2 = "45000";
let toNumber2 = parseInt(strr2);

//ke bilangan pecahan 
let strr3 = "65000";

console.log(toNumber);
console.log(toNumber2);

//mengubah ke boolean 
let falsyValue = "";
let truthyValue = "Egal Assegaf";

console.log(Boolean(falsyValue));
console.log(Boolean(truthyValue));


// Soal Latihan
// Soal 1: Konversi String ke Angka
// Buat variabel str dengan nilai "123.45".

// Konversi str menjadi angka bulat.
// Konversi str menjadi angka desimal.
// Tampilkan hasilnya di console.

let myString = "123.45";

let intFloat = parseFloat(myString);
let intNumber = parseInt(myString);

console.log("Hasilnya: ", intFloat);
console.log("Hasilnya: ", intNumber);

// Soal 2: Mengubah Angka ke String
// Buat program yang:

// Mendeklarasikan variabel angka num dengan nilai 42.
// Ubah num menjadi string.
// Tampilkan tipe data sebelum dan sesudah konversi.

let myNum3 = 42;
let toString = myNum3.toString();
let toString2 = String(toString);

console.log("Sebelum di konversi : ", typeof myNum3, myNum3);
console.log("Sesudah di konversi : ", typeof toString2, toString2);

// Soal 5: Prompt dan Konversi
// Buat program yang meminta pengguna memasukkan angka melalui prompt():

// Ubah nilai dari prompt() menjadi angka.
// Jika pengguna memasukkan angka, tampilkan kuadrat dari angka tersebut.
// Jika bukan angka, tampilkan pesan kesalahan.

let input = prompt("Masukkan angka : ");
let number = Number(input);

if (!isNaN(number)) {
    alert(`Kuadrat dari ${number} adalah ${number ** 2}`)
} else {
    alert("Inputan salah!");
}
