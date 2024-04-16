/*
    Bir sınıfın static bir özelliği,sınıfın kendisine aittir ve bu özellik
    sınıfın herhangi bir örneğine bağlı değildir.Bu sınıfın genel durumunu veya
    genel bir sayısal değeri temsil etmek için kullanılabilir.

    Static özellikler ve yöntemler bir sınıfın tüm örnekleri tarafından paylaşılır.


*/
// class KahveDukkani1 {
//   toplamDukkanSayisi: number = 0;
//   constructor() {
//     this.toplamDukkanSayisi++;
//   }
// }
// const kahve = new KahveDukkani1();
// const kahve1 = new KahveDukkani1();
// console.log(kahve1.toplamDukkanSayisi);

class KahveDukkani {
  static toplamDukkanSayisi: number = 0;
  constructor() {
    // Her yeni örnek oluşturulduğunda toplam dükkan sayısını bir arttırır.
    KahveDukkani.toplamDukkanSayisi++;
  }
}
// Üç farklı kahve dükkanı örneği oluşturuldu
const kahveDukkani1 = new KahveDukkani();
const kahveDukkani2 = new KahveDukkani();
const kahveDukkani3 = new KahveDukkani();
console.log(KahveDukkani.toplamDukkanSayisi); // Sonuç:3

/*
    ! Static Method

    * Static methodlar, sınıfın örneği oluşturulmadan doğrudan sınıf üzerinden çağrılabilen methodlardır.
    * Bu genellikle sınıf düzeyinde genel işlevselliği temsil etmek için kullanılır.
    * Örneğin bir kahve dükkanındaki genel indirim oranını yönetmek için:
*/
class Indirim {
  static indirimOrani: number = 0;

  static setIndirimOrani(yeniOran: number) {
    // Static metod sınıfın örneği oluşturulmadan çağrılabilir.
    Indirim.indirimOrani = yeniOran;
  }
}
Indirim.setIndirimOrani(0.15);
console.log(Indirim.indirimOrani);
// Burada setIndirimOrani adlı static method, sınıfın örneği oluşturulmadan çağrılabilir ve genel indirim oranı hızlıca güncellenebilir.

class BankaHesabi {
  private _hesapSahibi: string;
  private _hesapNumarası: string;
  private _bakiye: number;
  private static _hesapHareketleri: string[] = [];

  constructor(hesapSahibi: string, hesapNumarasi: string, bakiye: number) {
    this._hesapSahibi = hesapSahibi;
    this._hesapNumarası = hesapNumarasi;
    this._bakiye = bakiye;
  }

  public paraYatir(miktar: number): void {
    this._bakiye += miktar;
    BankaHesabi._hesapHareketleri.push(
      `[${new Date()}] ${this._hesapSahibi} tarafından ${miktar} TL yatırıldı.`
    );
  }
  public paraCek(miktar: number): void {
    if (this._bakiye >= miktar) {
      this._bakiye -= miktar;
      BankaHesabi._hesapHareketleri.push(
        `[${new Date()}] ${this._hesapSahibi} tarafından ${miktar} TL çekildi.`
      );
    }
  }
  // Hesap hareketlerini getirme
  public static get hesapHareketleri(): string[] {
    return BankaHesabi._hesapHareketleri;
  }
}
let hesap = new BankaHesabi("Ahmet", "123456789", 1000);
hesap.paraCek(400);
hesap.paraYatir(2000);
hesap.paraCek(100);

BankaHesabi.hesapHareketleri.forEach((hesapHareketi) =>
  console.log(hesapHareketi)
);
