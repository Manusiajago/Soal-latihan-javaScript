// Switch Statement dalam JavaScript
// Switch digunakan untuk menggantikan beberapa if...else if dalam kondisi yang kompleks tetapi terstruktur. Biasanya digunakan jika ada banyak kondisi yang bergantung pada nilai spesifik (misalnya, case tertentu).

// Penjelasan:
// Ekspresi: Nilai yang akan dicek dalam setiap case.
// Case: Blok kode yang dieksekusi jika ekspresi cocok dengan nilai yang diberikan.
// Break: Menghentikan eksekusi setelah menemukan case yang sesuai.
// Default: Dieksekusi jika tidak ada case yang cocok. Bersifat opsional.

// Contoh syntax :

// switch (ekspresi) {
//     case nilai1:
//         // Kode jika ekspresi === nilai1
//         break;
//     case nilai2:
//         // Kode jika ekspresi === nilai2
//         break;
//     default:
//         // Kode jika tidak ada case yang sesuai
//         break;
// }

// Contoh mengecek hari berdasarkan angka

let hari = Number(prompt('Masukkan hari 1-7'));

switch (hari) {
    case 1:
        console.log(`Hari ini adalah hari senin`);
        break;
    case 2:
        console.log(`Hari ini adalah hari selasa`);
        break;
    case 3:
        console.log(`Hari ini adalah hari rabu`);
        break;
    case 4:
        console.log(`Hari ini adalah hari kamis`);
        break;
    case 5:
        console.log(`Hari ini adalah hari kamis`);
        break;
    case 6:
        console.log(`Hari ini adalah hari jumat`);
        break;
    case 7:
        console.log(`Hari ini adalah hari sabtu`);
        break;
    default:
        console.log(`Inputan bukan angka!`)
        break;
}

// kalkulator sederhana 
let operasi = prompt('Masukkan operasi ( + , - , * , / , )');
let number1 = Number(prompt('Masukkan angka pertama: '));
let number2 = Number(prompt('Masukkan angka kedua: '));

switch (operasi) {
    case '+':
        console.log(` Hasilnya penambahan : ${number1 + number2}`);
        break;
    case '-':
        console.log(`Hasil pengurangan : ${number1 - number2}`);
        break;
    case '*':
        console.log(`Hasil perkalian : ${number1 * number2}`);
        break;
    case '/':
        console.log(`Hasil pembagian: ${number1 / number2}`);
        break;
    default:
        console.log(`Inputan bukan operator!`);
        break;
}

// Memberikan nilai bersasarkan angka 
let input = Number(prompt('Masukkan nilai ujian anda 0 - 100'));

switch (true) {
    case input >= 90:
        console.log(`Nilai anda adalah A`);
        break;
    case input >= 80:
        console.log(`Nilai anda adalah B`);
        break;
    case input >= 70:
        console.log(`Nilai anda adalah C`);
        break;
    case input >= 60:
        console.log(`Nilai anda adalah D`);
        break;
    default:
        console.log(`Nilai anda adalah E`);
        break;
}