class Car {
  private battery_power: number = 10;
  private starter_motor_running: boolean = false;
  private engine_started: boolean = false;
  private key_status: 0 | 1 | 2 = 0;
  /* Mevcut bir property(özellik) değerini return eden methoda getter method denir */
  getEngineStatus() {
    return this.engine_started;
  }
  /* Bir propertyi set eden(değer atamak) fonksiyona setter fonksiyon denir. */
  startEngine() {
    if (this.battery_power <= 0) {
      throw new Error("Batarya arızalı veya boş");
    }
    if (this.starter_motor_running === false) {
      throw new Error("Marş motoru arızalı");
    }
    if (this.key_status != 2) {
      throw new Error("Önce anahtarı ikinci konuma getiriniz!");
    }
    this.engine_started = true;
  }
  // setter getter aynı alanda kullanılabilir
  insertKey() {
    this.key_status = 0;
    return this;
  }
  turnKey(level: 0 | 1 | 2) {
    if (level === 2) {
      this.starter_motor_running = true;
    } else {
      this.starter_motor_running = false;
    }
    this.key_status = level;
  }
}

const personCar = new Car();
personCar.insertKey();
console.log(">>insertkey", personCar);

/* Typescriptte getter setter */
class Kullanici {
  private _ad: string;
  private _soyad: string;
  private _eposta: string;
  constructor(ad: string, soyad: string, eposta: string) {
    this._ad = ad;
    this._soyad = soyad;
    this._eposta;
  }
  /* TS'ye ait olan bu yöntemi kullanarak bir getter yazdığımızda bu fonksiyondan mutlaka herhangi bir değer döndermek mecburiyetindeyiz */
  // getter methodu
  get ad() {
    return this._ad;
  }
  // adı set etmek için setter methodu
  set ad(yeniAd: string) {
    this._ad = yeniAd;
  }
  get soyad(): string {
    return this._soyad;
  }
  /* Bir setter methodu tanımlandığında bu methodun mutlaka bir adet parametresi olmalıdır ve bir değer döndermemelidir.Aksi halde hata verir. */
  set soyad(yeniSoyad: string) {
    this._soyad = yeniSoyad;
    // return this.soyad
  }
}
