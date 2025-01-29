//staircase 

const staircase = (n) => {
    for (let i = 0; i <= n; i++) {
        console.log(" ".repeat(n - i) + "#".repeat(i));
    }
}

const result = staircase(6);
console.log("Rata kanan", result);

const staircase2 = (n) => {
    for (let i = 0; i <= n; i++) {
        console.log("#".repeat(i));
    }
}

const result2 = staircase2(6);
console.log("Rata kiri", result2);