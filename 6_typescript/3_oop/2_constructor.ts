/*
     ! constructor(yapıcı,inşa eden) method:
    * Bir objenin propertleriini initialize(başlatmak) etmek için kullanılır.
    * constructor methodu "new" operotörü tarafından bir kez çağrılır ve sonrasında asla çağrılmaz. 
    
    Özellikler:
    * Classlarda constructor olması opsiyoneldir.Constructor varsa new operatörü tarafından otomatik olarak çalıştırılır, yoksa da hiçbir şey olmaz.
    * constructorın amacı class propertylerini(özelliklerine) dinamik veya sabit şekilde initialize etmektir.
    * Eğer constructorda parametre varsa "new" operatörünü kullanırken bu parametreler yazılmalıdır.
*/

class ExampleClass {
  prop1: string;
  prop2: number;

  constructor() {
    // hardcode(sabit kod)
    this.prop1 = "";
    this.prop2 = 0;
  }
}
const exampleClass = new ExampleClass();

class ExampleClass_1 {
  prop1: string;
  prop2: number;
  constructor(param1: string, param2: number) {
    // Dinamik şekilde başlatabiliriz.
    this.prop1 = param1;
    this.prop2 = param2;
  }
}
const obj = new ExampleClass_1("test", 10);
console.log(obj.prop1);
console.log(obj.prop2);

// Soru:Monitör classı yazınız.
// class Monitör {
//   model: string;
//   brand: string;
//   screen_size: number;
//   price: number;
//   is_curved: boolean = true;
//   currency: "dolar" | "euro" | "türk lirası" = "dolar";
//   refresh_rate: 60 | 144 | 165 | 240 = 60;
// }

/*
   ! Typescript Access Modifiers (Erişim Belirleyicileri):
   * public:Her yerden erişilebilir.
   * private:Sadece tanımlandığı sınıf içerisinden erişilebilir.
   * protected:Sadece tanımlandığı sınıfta ya da o sınıfı miras alan sınıflardan erişilebilir
*/
//* Public: Bu access modifier sınıf içinde ve dışında erişime açıktır.Yani herkes tarafından erişilebilir.
class Araba {
  public marka: string;
  constructor(marka: string) {
    this.marka = marka;
  }
}
let araba = new Araba("BMW");
console.log(araba.marka);
//* Private: Bu access modifier, sadece tanımlandığı sınıf içinden erişilebiliyor demektir.Dışarıdan erişimi engellenmiştir.
class BankaHesabi {
  private bakiye: number;

  constructor(bakiye: number) {
    this.bakiye = bakiye;
  }

  paraCek(miktar: number): void {
    if (miktar <= this.bakiye) {
      this.bakiye -= miktar;
      console.log(`Çekilen miktar: ${miktar} - Yeni bakiye: ${this.bakiye}`);
    } else {
      console.log("Yetersiz bakiye!");
    }
  }
}
let hesap = new BankaHesabi(1000);
hesap.paraCek(500); // Bu geçerlidir, çünkü paraCek metodu sınıf içinden erişilebiliyor.
// console.log(hesap.bakiye); Bu geçerli değildir, çünkü bakiye private edilmiştir

class Sepet {
  private urunler: { ad: string; fiyat: number }[];
  toplamTutar: number;

  constructor() {
    this.urunler = [];
    this.toplamTutar = 0;
  }

  public urunEkle(ad: string, fiyat: number): void {
    this.urunler.push({ ad, fiyat });
    this.toplamTutar += fiyat;
    console.log(`${ad} ürün sepete eklendi.`);
  }

  public urunCikar(ad: string, fiyat: number): void {
    const index = this.urunler.findIndex(
      (urun) => urun.ad === ad && urun.fiyat === fiyat
    );
    if (index !== -1) {
      this.urunler.splice(index, 1);
      this.toplamTutar -= fiyat;
      console.log(`${ad} ürünü sepetten çıkarıldı`);
    } else {
      console.log(`${ad} ürünü sepetinizde bulunamadı`);
    }
  }
  public toplamTutariGoster(): void {
    console.log(`Sepet Toplam: ${this.toplamTutar} TL`);
  }
}
let sepet = new Sepet();
sepet.urunEkle("Kalem", 10);
sepet.urunEkle("PC", 1000);
sepet.urunEkle("Tablet", 1000);
sepet.toplamTutariGoster();
sepet.urunCikar("Tablet", 1000);
sepet.toplamTutariGoster();

//* Protected: Protected üyeler sadece tanımlandığı sınıf içinde veya bu sınıftan türetilmiş alt sınıflarda erişilebilir.Yani, dışarıdan
//* erişim engellenmiştir ancak alt sınıflar erişebilir.

class Proje {
  protected projeAdi: string;
  protected projeYoneticisi: string;
  constructor(projeAdi: string, projeYoneticisi: string) {
    this.projeAdi = projeAdi;
    this.projeYoneticisi = projeYoneticisi;
  }
  protected projeBilgisiGoster(): void {
    console.log(
      `Proje Adı: ${this.projeAdi}, Proje Yöneticisi: ${this.projeYoneticisi}`
    );
  }
}
let proje = new Proje("test", "test");

class AltProje extends Proje {
  private altProjeAdi: string;

  constructor(projeAdi: string, projeYoneticisi: string, altProjeAdi: string) {
    super(projeAdi, projeYoneticisi);
    this.altProjeAdi = altProjeAdi;
  }
  altProjeBilgisiGoster(): void {
    console.log(`Alt Proje Adı: ${this.altProjeAdi}`);
    this.projeBilgisiGoster();
  }
}

let altProje = new AltProje("E-ticaret Platformu", "test", "Ödeme Sistemi");
altProje.altProjeBilgisiGoster();

class Hayvan {
  protected tür: string;
  constructor(tür: string) {
    this.tür = tür;
  }
}
class Kedi extends Hayvan {
  private miyavla(): void {
    console.log("Miyav");
  }
  tanitimYap(): void {
    console.log(`Bu bir ${this.tür} kedisi.`);
    this.miyavla();
  }
}
let kedi = new Kedi("Van ");
kedi.tanitimYap();

/*
   ! Readonly:
   * Typescriptte readonly keywordü bir değişkenin veya özelliğin sadece okunabilir olmasını 
   * sağlayan bir özelliktir.Yani, readonly olarak tanımlanan bir değişkenin değeri sadece başlatıldığı zaman
   *  değiştirilebilir ve sonrasında başka bir değer atanamaz.

*/

class Araba1 {
  readonly marka: string;

  constructor(marka: string) {
    this.marka = marka; // Değer sadece constructor içinde atanabilir.
  }

  degisiklikYap() {
    // this.marka = "Yeni marka"; Bu satır hata verir.
  }
}
let araba1 = new Araba1("toyota");
// araba1.marka = "bmw";
// console.log(araba1.marka);

class Calisan {
  private readonly sicilNo: string;
  public ad: string;
  public soyad: string;

  constructor(sicilNo: string, ad: string, soyad: string) {
    this.sicilNo = sicilNo;
    this.ad = ad;
    this.soyad = soyad;
  }

  calisanBilgisiGoster(): void {
    // this.sicilNo = 234234
    console.log(`Sicil No:${this.sicilNo}, Ad:${this.ad}, Soyad:${this.soyad}`);
  }
}

let calisan = new Calisan("123123", "test", "test");
calisan.calisanBilgisiGoster();
// calisan.sicilNo = "qeqwe"
let readonlyDizi: readonly number[] = [1, 2, 3];
// readonlyDizi.push();
// readonlyDizi[0] = 10;
