// latihan 1 
const buku = {
    judul: 'Atomic Habbits',
    penulis: 'James Clear',
    tahunTerbit: 2018,
    deskripsi: function () {
        return `Judul buku ini adalah ${this.judul}, ditulis oleh ${this.penulis} pada tahun ${this.tahunTerbit}`;
    }
};

// latihan 2 manipulasi object
buku.genre = 'Motivation';
buku.tahunTerbit = 2020;
delete buku.genre;

for (key in buku) {
    console.log(`${key}: ${buku[key]}`)
}

console.log(buku)