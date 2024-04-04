/*
 * Custom Type
 * Şuana kadar tip ataması yaparken js'de var olan temel tipleri ekstra oalrak bir iki ts tipini (any tuple) veri tiplerini kullandık. Gerçk projelerde o anki yaptığımız işe özel spesifik veri tiplerini ihtiyaç duyabiliyoruz.
 
 * Bunları tanımlamak için "type" anahtar kelimesi ile kendi tipimizi oluşturabiliyorız.

 * Neden ihityıcmız Var?
 * Çünkü belirlediğimiz bir type'ı projenin birden çok alanında / sayfasında kullanılması gerekbilir. bu noktda custom type kullanmadan yapabileceğimiz tek şey kopyla yapıştır
 */
// Sorun: KOD KALABILIĞI
var user_1 = { name: 'ahmet', age: 38 };
var user_2 = { name: 'Ali', age: 46 };
var user_3 = { name: 'fatma', age: 96 };
var user_4 = { name: 'ayşe', age: 26 };
