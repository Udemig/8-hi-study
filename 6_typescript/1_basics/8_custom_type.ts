/*
 * Custom Type
 * Şuana kadar tip ataması yaparken js'de var olan temel tipleri ekstra oalrak bir iki ts tipini (any tuple) veri tiplerini kullandık. Gerçk projelerde o anki yaptığımız işe özel spesifik veri tiplerini ihtiyaç duyabiliyoruz.
 
 * Bunları tanımlamak için "type" anahtar kelimesi ile kendi tipimizi oluşturabiliyorız.

 * Neden ihityıcmız Var?
 * Çünkü belirlediğimiz bir type'ı projenin birden çok alanında / sayfasında kullanılması gerekbilir. bu noktda custom type kullanmadan yapabileceğimiz tek şey kopyla yapıştır
 */

// Sorun: KOD KALABILIĞI

let user_1: { name: string; age: number } = { name: 'ahmet', age: 38 };

let user_2: { name: string; age: number } = { name: 'Ali', age: 46 };

// Çözüm: TYPE ALIASES | CUSTOM TYPE

type UserType = { name: string; age: number };

let user_3: UserType = { name: 'fatma', age: 96 };
let user_4: UserType = { name: 'ayşe', age: 26 };

user_4.age;

//* Custom typelarda her türlü tip tanımlanabiilir
type Deneme = string;

let usernamee: Deneme = 'Ahmet';

// önetğin tuple'ı custom type yapalım
type GeoType = [number, number];

const xCords: GeoType = [45.67878, 34.5678];
const yCords: GeoType = [15.25638, 45.5248];

//* Oluşturduğumuz custom type'lar her yederde kullanılabilir (değişenin tipinde fonksiyonların parametresinin rtipinide bir array tipi içerisnde)

const flightRoute: GeoType[] = [
  [12, 34],
  [45, 67],
  [35, 68],
];
