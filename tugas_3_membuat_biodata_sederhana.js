// Deklarasi variabel
let nama = "Budi Santoso"; // tipe teks (string)
let umur = 17;             // tipe angka (number)
let isSiswa = true;        // tipe boolean (true/false)

// Menampilkan ke layar menggunakan console.log
console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("Status Siswa:", isSiswa);
console.log(`Nama: ${nama}, Umur: ${umur}, Siswa: ${isSiswa}`);

const hasil = document.getElementById("hasil");
if (hasil) {
  hasil.textContent = [
    `Nama: ${nama}`,
    `Umur: ${umur}`,
    `Status Siswa: ${isSiswa}`,
    `Nama: ${nama}, Umur: ${umur}, Siswa: ${isSiswa}`
  ].join("\n");
}