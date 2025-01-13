Operator matematika di JavaScript digunakan untuk melakukan operasi aritmatika pada angka. Berikut adalah penjelasan tentang berbagai operator matematika, disertai contoh:

---

### **1. Operator Aritmatika Dasar**

| Operator | Deskripsi              | Contoh                     | Hasil      |
|----------|------------------------|----------------------------|------------|
| `+`      | Penjumlahan            | `5 + 3`                   | `8`        |
| `-`      | Pengurangan            | `5 - 3`                   | `2`        |
| `*`      | Perkalian              | `5 * 3`                   | `15`       |
| `/`      | Pembagian              | `6 / 3`                   | `2`        |
| `%`      | Sisa bagi (modulus)    | `5 % 2`                   | `1`        |
| `**`     | Pemangkatan (eksponen) | `5 ** 2`                  | `25`       |

---

### **2. Operator Penugasan dengan Aritmatika**
Kombinasi antara operator penugasan (`=`) dengan operator aritmatika.

| Operator | Deskripsi                   | Contoh          | Hasil |
|----------|-----------------------------|-----------------|-------|
| `+=`     | Penjumlahan dan penugasan   | `x += 3` (x=5)  | `8`   |
| `-=`     | Pengurangan dan penugasan   | `x -= 2` (x=5)  | `3`   |
| `*=`     | Perkalian dan penugasan     | `x *= 2` (x=5)  | `10`  |
| `/=`     | Pembagian dan penugasan     | `x /= 2` (x=6)  | `3`   |
| `%=`     | Sisa bagi dan penugasan     | `x %= 2` (x=5)  | `1`   |

---

### **3. Operator Increment dan Decrement**

| Operator | Deskripsi                     | Contoh | Sebelum Eksekusi | Setelah Eksekusi |
|----------|-------------------------------|--------|------------------|-------------------|
| `++`     | Increment (menambah 1)        | `x++`  | `x = 5`          | `x = 6`           |
| `--`     | Decrement (mengurangi 1)      | `x--`  | `x = 5`          | `x = 4`           |

- **Pre-increment (`++x`)**: Nilai ditingkatkan terlebih dahulu sebelum digunakan.
  ```javascript
  let x = 5;
  console.log(++x); // Output: 6
  console.log(x);   // Output: 6
  ```

- **Post-increment (`x++`)**: Nilai digunakan terlebih dahulu sebelum ditingkatkan.
  ```javascript
  let x = 5;
  console.log(x++); // Output: 5
  console.log(x);   // Output: 6
  ```

---

### **4. Urutan Eksekusi (Precedence)**

| Operator            | Urutan Eksekusi (Dari Kanan ke Kiri) |
|---------------------|--------------------------------------|
| `()`                | Kurung memiliki prioritas tertinggi |
| `**`                | Eksponen                           |
| `*`, `/`, `%`       | Perkalian, pembagian, modulus       |
| `+`, `-`            | Penjumlahan dan pengurangan         |

**Contoh:**
```javascript
let result = 10 + 2 * 5; // 10 + (2 * 5) = 20
console.log(result); // Output: 20
```

---

### **5. Latihan**
#### **Soal 1: Operasi Dasar**
Berikan hasil dari operasi berikut:
```javascript
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
```

**Jawaban:**
```javascript
15
5
50
2
0
```

#### **Soal 2: Eksponen**
Tentukan kuadrat dan kubik dari sebuah angka.
```javascript
let x = 4;
console.log(x ** 2); // Kuadrat
console.log(x ** 3); // Kubik
```

**Jawaban:**
```javascript
16
64
```

#### **Soal 3: Increment dan Decrement**
Perhatikan output berikut:
```javascript
let count = 5;
console.log(count++); // ?
console.log(++count); // ?
console.log(count--); // ?
console.log(--count); // ?
```

**Jawaban:**
```javascript
5 // count digunakan dulu, baru naik ke 6
7 // count langsung naik ke 7 sebelum digunakan
7 // count digunakan dulu, baru turun ke 6
5 // count langsung turun ke 5 sebelum digunakan
```

#### **Soal 4: Urutan Eksekusi**
Tentukan hasil berikut:
```javascript
let result = 10 + 2 * (5 + 1) ** 2 / 3;
console.log(result);
```

**Jawaban:**
1. `(5 + 1)` → `6`
2. `6 ** 2` → `36`
3. `2 * 36` → `72`
4. `72 / 3` → `24`
5. `10 + 24` → `34`

Output: `34`

---

