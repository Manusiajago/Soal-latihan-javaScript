// function arraySum(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     return sum;
// }

// let inputArr = [1, 2, 3, 4, 5, 6, 7, 8];
// let sumResult = arraySum(inputArr);
// console.log(`Hasil nya adalah: ${sumResult}`)

function arraySum(arrr) {
    let sum = 0;

    for (let i = 0; i < arrr.length; i++) {
        sum += arrr[i];
    }

    return sum;
}

let ArrayAngka = [2, 10, 11, 14, 15, 16, 17, 18, 19, 20, 21];
let hasilnya = arraySum(ArrayAngka);
console.log(`ini adalah hasilnya: ${hasilnya}`);