function hitungLuasSegitiga(alas, tinggi) {
  return 0.5 * alas * tinggi;
}

const form = document.querySelector("#form-segitiga");
const inputAlas = document.querySelector("#alas");
const inputTinggi = document.querySelector("#tinggi");
const hasil = document.querySelector("#hasil");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const alas = Number(inputAlas.value);
  const tinggi = Number(inputTinggi.value);

  if (!Number.isFinite(alas) || !Number.isFinite(tinggi) || alas < 0 || tinggi < 0) {
    hasil.textContent = "Masukkan alas dan tinggi yang valid.";
    return;
  }

  hasil.textContent = `Luas segitiga: ${hitungLuasSegitiga(alas, tinggi)}`;
});