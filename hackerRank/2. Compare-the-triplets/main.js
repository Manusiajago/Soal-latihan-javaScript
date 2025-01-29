// Compare the triplets

function compareTriplets(arr1, arr2) {
    let score1 = 0;
    let score2 = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr2[i]) {
            score1 += 1;
        } else if (arr1[i] < arr2[i]) {
            score2 += 1;
        }
    }
    return [score1, score2];
}

const arr1 = [5, 6, 7];
const arr2 = [3, 6, 10];

const result = compareTriplets(arr1, arr2);
console.log("Hasil penjumlahan array: ", result);
