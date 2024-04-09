/*
 * Default Param (Varsayılan Değere Sahip Parametre)
 * Bazı durumlarda opsiyonel parametrelere değer göndermediğimiz zaman
 * undefined olması yerine bizim belirlediğimiz varsayılan bir değer sahip olmasını
 * isteyebiliyoruz.Bu durumda da default param kullanırız.
 
    * Özellikller:
    * Default parama varsayılan değer tanımı yaparken "=" kullanırız.
    * Bu yöntemi eğer parametreyi göndermediğimiz zaman undefined olmasını istemiyorsak kullanırız
 */

function selamVer(isim: string = "Dünya"): string {
  return `Merhaba ${isim}`;
}
console.log(selamVer());

//! Soru
//* Varsayılan veya opsiyonel bir parametreye sahip bir fonksiyon yazın
//* Bu fonksiyonu hem parametreye değer göndererek hem de göndermeden çalıştırıp
//* ürettiği sonuçları konsola yazınız.

function selam(veri: string = "Merhaba") {
  console.log(veri);
}
selam("Selamlar");

function karsila(msg: string = "hoşgeldin") {
  console.log(msg);
}
karsila();

function hesaplaKDV(price: number, kdv: number = 0.2): number {
  return price + price * kdv;
}
console.log(hesaplaKDV(100));
console.log(hesaplaKDV(100, 0.35));

const hesapla3 = (
  productPrice: number,
  productName: string,
  kdv: number = 18
): string => {
  return `${productName} için hesaplanan kdvli tutar: (${
    productPrice * (kdv / 100)
  })`;
};
const sonuc1 = hesapla3(150, "PC");
const sonuc2 = hesapla3(150, "PC", 20);
console.log(sonuc2);
