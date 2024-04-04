/*
 * Enum (numaralandırma)
 * Belirdli değerler kümesi
 * Eleman sayısı ve alabileceği değerler belirli olan değişkenlerin değerini bir grup halinde tutmak için kullanıyoruz
  
 * Genelde az miktarda farklı değper sahip veilerin gruplandırlması için kullanılır.
 
 * Enum isimlendirirken sonuna "enum" takısı koymak faydalı olabilir.
 * İsimlendiriken değişken isimlendirme kurallarına sadık kalırız.
 * İlk harfi büyük olmalı
 */

// Örnek: Trafik ışığının aşamalarını verisini tutalım

// klasik js ile nasıl yapılırdı
const renkler = {
  red: 0,
  yellow: 1,
  green: 2,
};

// typsicript ile nasıl yapılır
enum Colors {
  red,
  yellow,
  green,
}

let mevcut_trafik_isigi = Colors.yellow;

console.log(mevcut_trafik_isigi); // 1

// Örnek 2
enum Gunler {
  Pazartesi,
  Sali,
  Carsamba,
  Persembe,
  Cuma,
  Cumartesi,
  Pazar,
}

let day = Gunler.Pazartesi; // 0
let day2 = Gunler[0]; // Pazartesi
let day3 = Gunler[Gunler.Sali]; // Salı

console.log('day', day);
console.log('day2', day2);

// Örnek 3
enum Status {
  set = 'Hazırlanıyor',
  travel = 'Seyahat Ediyor',
  done = 'Seyahat Tamamlandı',
}

console.log('sonuççç-1', Status.set);
console.log('sonuççç-2', Status.travel);
console.log('sonuççç-3', Status.done);
