/*
    ! Interface (arayüz)
    * Interface bir nesnenin(obje) yapısının ve bu yapının hangi
    * özellikler sahip olması gerektiğini belirler
    * Abstract Class ve Type ile görevi aynıdır

todo Farklardan Bazıları:
    * Interfacelerde erişim belirteci yoktur.
    * Classlar sadece bir classı miras alabilir(extend edebilir).
    * Interfaceler birden fazla farklı interfaceleri miras alabilir.
    ? Özellikler
    * Interface isimlendirilmesi:
    - sonuna "Interface" takısı eklenir
    - ya da başına "I" eklenir.

*/

// isimlendirme
interface IProp {}
interface PropInterface {}
// Oluşturacağımız geometrik şekil objelerinin ortak noktalarını interface ile tanımlayabiliriz
interface IShape {
  width: number;
  height: number;
  radius?: number;

  calculateArea(): number | string; // methodun görevini sonradan söyleyebiliriz
}

const square: IShape = {
  height: 50,
  width: 50,
  calculateArea() {
    return this.height * this.width;
  },
};

const circle: IShape = {
  width: 50,
  height: 1,
  radius: 25,
  calculateArea() {
    return this.radius
      ? Math.PI * this.radius * this.radius
      : "Lütfen yarı çap giriniz.";
  },
};
