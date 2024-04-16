/*
    * OOP (Object Orianted Programming - Nesne Tabanlı Programlama)

    * Bugüne kadar projelerimizde hep fonksiyonlar kullanarak geliştirdik.
    * Fakat proje kapsamı büyüdükçe kullandığımız yaklaşım proje yöntemini 
    * zorlaştırabilir. Mühendisler büyük projeleri yaparken yazılımcıların işini 
    * kolaylaştırmak için programlama arayışına girdiler.
    * OOP: Etrafımızda bulunan nesnelerin özellik(property) ve davranışlarını(method) 
    * modelleyerek yapılan programlama yöntemidir.


*/

/*
 * Class >> Bir objenin özellik ve methodalarını bir bütün halinde tutulduğu yapıdır.
 * Bir class tanımlamak istediğimizde class keywordüyle başlar, sonra isim yazılır, sonra da süslü
 * parantezler kullanılarak classın gövdesi yazılır.
 */
class Old_Phone {
  // Burası classın gövdesidir.Burda özellik ve methodları tanımlarız.

  // Örnek propertyleri aşağıya yazalım
  telefon_tipi: "entegre" | "ayrılmış" = "entegre";
  tus_takim_tipi: "döner" | "santal" = "döner";
  govde: string = "yatay";
  // Örnek methodları aşağıya yazalım
  ahizeAc() {
    console.log("Ahize açılıyor...");
  }
  numarayıCevir(telNum: string): boolean {
    if (telNum.length > 10) {
      console.log("Numara çevriliyor...");
      return true;
    } else {
      console.log("Numara bulunamadı");
      return false;
    }
  }

  ahizeKapat() {
    console.log("Ahize kapatılıyor...");
  }
}
/*
    * Classların Kullanımı:
    * Bir class'ı tanımlama aynı bir type'ı veya fonksiyonu tanımlamak gibidir.
    * Bir class'ı kullanmak yani class'tan bir örnek oluşturmak için new anahtar kelimesi kullanılır.
    * Bu sayade class'ın çalışan bir kopyasını oluşturmuş oluyoruz.
    * Bu kopyasına da object deriz.

*/

const antika_telefon = new Old_Phone();

antika_telefon.govde = "dikey";
antika_telefon.telefon_tipi = "entegre";
antika_telefon.tus_takim_tipi = "santal";
// objenin methodlarına erişme
antika_telefon.ahizeAc();
antika_telefon.numarayıCevir("501501501051");
antika_telefon.ahizeKapat();

class Ev {
  // Özellikler(property)
  _odaSayisi: number;
  _pencereSayisi: number;
  _kat: number;
  // Classlar bir referans tiptir.Biz bu classı kullanmak için ondan bir tane üretmemiz gerekiyor.
  // Yani newlemek dediğimiz örnekleme işlemini yapmamız gerekiyor.Bunu yapınca çalışacak blok bu constructor bloğudur.
  constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
    this._odaSayisi = odaSayisi;
    this._pencereSayisi = pencereSayisi;
    this._kat = kat;
  }
  yemekYe() {
    console.log(this._kat + " katlı evde yemek yenildi.");
  }
}
let ev = new Ev(3, 4, 5); // odasayisi penceresayisi kat değerlerini Ev'in contsructoruna gönderelim
console.log(ev);
ev.yemekYe(); // fonksiyon olduğu için () koymalıyım.
