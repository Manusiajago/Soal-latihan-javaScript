console.log("test")

// diagonal difference
// Input array 2D
// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

const diagonalDiff = (arr) => {
    let diagonal1 = 0;
    let diagonal2 = 0;

    for (let i = 0; i < arr.length; i++) {
        diagonal1 += arr[i][i];
        diagonal2 += arr[i][arr.length - 1 - i];

    }
    //menghitug selisih 
    return Math.abs(diagonal1 - diagonal2);
};

const arr = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

const result = diagonalDiff(arr);
console.log(result);    