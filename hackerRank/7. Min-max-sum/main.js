// const minMaxSum = (arr) => {
//     //urutkan array dulu / ascending
//     arr.sort((a, b) => {
//         return a - b;
//     })

//     // Ambil 4 angka pertama (minSum) & 4 angka terakhir (maxSum)
//     let minSum = arr.slice(0, 4).reduce((a, b) => {
//         return a + b;
//     })
//     let maxSum = arr.slice(1, 5).reduce((a, b) => {
//         return a + b;
//     })

//     console.log(minSum, maxSum);

//     // Hitung minSum (4 angka pertama) & maxSum (4 angka terakhir)
// }


// const result = minMaxSum([1, 3, 5, 7, 9]);
// console.log(result);

const minMaxSum = (arr) => {
    //sorting array / ascending
    arr.sort((a, b) => {
        return a - b;
    })

    let minSum = arr.slice(0, 4).reduce((a, b) => {
        return a + b;
    })

    let maxSum = arr.slice(1, 5).reduce((a, b) => {
        return a + b;
    })

    console.log(minSum, maxSum);
};

const result = minMaxSum([1, 3, 5, 7, 9]);
console.log(result);