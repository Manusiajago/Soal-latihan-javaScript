//plus minus

const plusMinus = ((arr) => {
    // menampung semua bilangan positif , negatif , nol
    let positif = 0;
    let negatif = 0;
    let nol = 0;

    //iterasi arr / array lalu validasi
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positif++;
        } else if (arr[i] < 0) {
            negatif++;
        } else {
            nol++;
        }
    }

    // Menghitung rasio dan menampilkan hasil dengan 6 angka di belakang koma
    let total = arr.length;
    console.log((positif / negatif).toFixed(6));
    console.log((negatif / total).toFixed(6));
    console.log((nol / total).toFixed(6));
})

const arr = [-4, 3, -9, 0, 4, 1];
const result = plusMinus(arr)
console.log(result);