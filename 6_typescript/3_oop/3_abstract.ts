/*
    ! Abstract Class (Soyut Sınıf)
*/
// soyutlama yaptık içerisinde herhangi bir değer atamadık ya da işlevsellik kazandırmadık
abstract class TakePhoto {
  constructor(cameraMode: string, filter: string) {}
  abstract share(): void;
}
// Abstract classların doğrudan örneğini oluşturamayız
// const example =new TakePhoto()

class Instagram extends TakePhoto {
  constructor(cameraMode: string, filter: string, zoom: number) {
    super(cameraMode, filter);
  }
  share(): void {
    /*
     * Burada abstract olan yani görevi
     * tanımlanmamış olan fonksiyonun görevini tanımlıyoruz.
     */
    console.log("Çekilen fotoğraf hikayede paylaşıldı");
  }
}
const instagram = new Instagram("Front", "Sun", 1.2);
instagram.share();

class Twitter extends TakePhoto {
  constructor(cameraMode: string, filter: string) {
    super(cameraMode, filter);
  }
  share(): void {
    console.log("Çekilen fotoğraf tweet olarak paylaşıldı");
  }
}
const tweet = new Twitter("back", "night");
tweet.share();

abstract class Urun {
  protected id: string;
  public ad: string;
  public fiyat: number;

  constructor(id: string, ad: string, fiyat: number) {
    (this.id = id), (this.ad = ad), (this.fiyat = fiyat);
  }

  public abstract bilgiGoster(): void;
}
class ElektronikUrun extends Urun {
  private garantiSuresi: number;
  constructor(id: string, ad: string, fiyat: number, garantiSuresi: number) {
    super(id, ad, fiyat);
    this.garantiSuresi = garantiSuresi;
  }
  public bilgiGoster(): void {
    console.log(
      `ID:${this.id}, Ad:${this.ad}, Fiyat:${this.fiyat},Garanti Süresi:${this.garantiSuresi}`
    );
  }
}

class GiyimUrun extends Urun {
  private beden: string;
  constructor(id: string, ad: string, fiyat: number, beden: string) {
    super(id, ad, fiyat);
    this.beden = beden;
  }
  public bilgiGoster(): void {
    `ID:${this.id}, Ad:${this.ad}, Fiyat:${this.fiyat},Beden:${this.beden}`;
  }
}

let telefon = new ElektronikUrun("T001", "Akıllı Telefon", 4000, 24);
let gomlek = new GiyimUrun("G001", "Gömlek", 200, "L");

telefon.bilgiGoster();
gomlek.bilgiGoster();
