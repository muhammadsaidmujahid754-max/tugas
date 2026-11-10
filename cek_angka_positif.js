function cekAngka(angka) {
  if (angka > 0) {
    return "Positif";
  } else if (angka < 0) {
    return "Negatif";
  } else if (angka === 0) {
    return "Nol";
  } else {
    return "Bukan angka yang valid";
  }
}

// Contoh pengujian:
console.log(cekAngka(15));    // Output: Positif
console.log(cekAngka(-7));    // Output: Negatif
console.log(cekAngka(0));     // Output: Nol
console.log(cekAngka("abc")); // Output: Bukan angka yang valid