/*
 * Type Annotion:
 * Javascript'te değişkennin türünü belirleme gibi bir özellik söz konusu değil
 * Fakat typescript'de tanımladığımımz değişkenlerini tipini de tanımlayabiliyoruz
 * Bu sayede değişkene değer ataması yaparken belirlenen tip kısıtlamasının dışarına çıkamıyoruz
 */

// artık user name string dışında bir veri almaz
let username: string = 'mahmut';

// aynı tipte veri atamada bir sorun yok
username = 'ali';

// farklı tipte veri atayamıyoruz
// username = {};
// username = 34;
// username = true;
// username = [];

// SORU: Type belirtmek zorunda mıyız?
let age = 40;

age = 80;
// age = 'elli';

// CEVAP:
// Biz type tanımlamasak bile ts otomatik olarak değişkenin değerinin tipi her neyse onu değişkenin tipi olarak tanımlar. Bu bizimm için kolaylık gibi gözüksede bazı durumlarda beklenmedik sonuçlar otaya çıkabilir. ve öğrenme sürecinde olduğumuzdan dolayı en sağlı yöntem bütün değişkenlerin tipini tanımlamak.

/*
 ? Javascript'de bulunan veri tipleri
 * string
 * number
 * boolean
 * object
 * array
 * null
 * undefined
 * function
 * symbol (pek kullanılmaz)
 * bigint (pek kullanılmaz)
 * 
 * Bu veri tiplerinin tamamını tip atamasında kullanabiliyoruz 
*/

let project_name: string = `YemekSepeti Clone`;

let person_age: number = 40;

let has_lisence: boolean = true;

let student: object = {
  id: 2,
  name: 'Ali',
  year: 2020,
};

let value: null = null;

let value2: undefined;
