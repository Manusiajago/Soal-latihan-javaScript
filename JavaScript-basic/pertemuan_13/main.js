// console.log("testing")
// Ada 2 aturan meng copy/clone tipe data object yaitu shallow copy dan deep copy

// 1. Shallow copy
const myObj1 = {
    nama: "Egal Assegaf",
    umur: 22,
    alamat: {
        kota: "Jakarta",
        kodePos: 12345
    }
}
// Catatan: Spread hanya bekerja untuk object satu tingkat (tidak dalam).

const myObj1Copy = { ...myObj1 };
console.log(myObj1Copy);

// cara ke dua menggunakan object.asign()
const myObj2 = {
    nama: "Tsadelia02",
    umur: 24,
    jurusan: "Ilmu Komunikasi"
};

const myObj2Copy = Object.assign({}, myObj2);
console.log(myObj2Copy);
// 📌 Sama seperti spread operator, ini juga hanya copy satu tingkat (shallow copy).


// 2. Deep Copy
// Untuk object yang memiliki nested object, kita harus menggunakan deep copy agar tidak berbagi referensi.
// Menggunakan JSON.parse(JSON.stringify(obj))
// Example: 

const myObj3 = {
    nama: "Amfibi",
    umur: 22,
    jurusan: "Teknik Informatika",
    alamat: {
        kota: "Jakarta",
        kodePos: 12345
    }
}

const myObj3Copy = JSON.parse(JSON.stringify(myObj3));
myObj3Copy.alamat.kota = "Bandung"


console.log(myObj3Copy);
console.log(myObj3);
console.log()

//Menggunakan StructuredClone() (rekomendasi modern) 
const myObj4 = {
    nama: "Teguh Purnomo",
    umur: 22,
    jurusan: "Teknik Informatika",
    alamat: {
        kota: "Jakarta",
        kodePos: 12345
    }
}

const myObj4Copy = structuredClone(myObj4);
myObj4Copy.nama = "Gagas";

console.log(myObj4Copy);

