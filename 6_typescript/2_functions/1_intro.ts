/*
 * Function Type
 * Typescript'de fonksiyonların tipini tanımlamaktan kastımız fonksiyonun aldığı parametreleri ve return ettiği değerin tipini tanımlamaktır.
 
 * Javascript Fonksiyonları
 * 1- İsimli Fonksiyonlar 
 * 2- İsimsiz Fonksiyonlar 
 * 3- Arrow (Ok) Fonksiyonlar 
 * 4- Singleline (Teksatır) Fonksiyonlar 
 * 5- Immediatecall (Acilen Çağrılan) Fonksiyonlar 

*/

type n = number;
type s = string;

//? 1) İsimli Fonksiyonlar
function hesapla(a: n, b: n): s {
  return 'Hesaplama Sonucu' + a + b;
}

hesapla(10, 20); // "Hesaplama Sonucu 30" | 30

//? 2) İsimsiz Fonksiyonlar
const noNameFunc = function (a: n, b: n): n {
  return a + b;
};

//? 3) Ok Fonksiyonlar
const arrowFunc = (par: number): number => {
  const total = par * 5;
  return total / 2;
};

//? 4) Tek Satır Fonksiyonlar
const singleLineFunc = (par: number): number => par * 10;
