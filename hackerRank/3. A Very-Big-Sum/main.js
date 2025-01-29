// Input array
// const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

const veryBigSum = (arr) => {
    // membuat variabel untuk menampung total
    let total = 0;

    //loop iterasi arr
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
};

const myArr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
const result = veryBigSum(myArr);
console.log(`Hasilnya adalah: ${result}`);