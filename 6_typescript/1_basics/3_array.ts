/*
 * Array Type:
 * Typescript'de dizilerin itipini tanımlarken sadece bu değişken bir dizi olucak diyemiyoruz. Bu dizinin içerisnde şu tipte elemanlar olucak şeklinde tanım yapıyoruz. Sonuç olarak dizinin elemanlarının veri tipini söylememiz gerekiyor.

 * Tanım:
 * 
 * tip[]
*/

// Tip atamasının kısıtlamları sadece değişkeni tanımlarken değil
const users: string[] = ['Gül', 'Fatma', 'Ali'];

// Bu değişkeni kullanırken / manipüle ederkende karşımıza çıkıyor:
users.push('Mahmut');
// users.push(30);
// users.unshift(true);

// Örnek 2
const ages: number[] = [45, 67, 89, 24, 5, 89, 234];

// Örnek 3
const licences: boolean[] = [true, false, true, false, false];

/*
 * SORU: Bir dizinin içerisinde birden fazla farklı veri tipi kullanmak istersek ne yaparız?

 * Cevap: Normalde bir dizide tek türde veri olması bekllenir.
 * Bazı durumlarda birden farklı tüde veri alan diziler olabilir.
 * Birden fazla tüde veri alan dizler tanımlayaiblmek için "unionTypes"
 * Union Types (Birleşik Tipkler) oluşturabilmek için "|" kullanılır
 * string | number > "ya string olsun ya number olusn" 
*/

let teachers: (string | null)[] = ['Uğur', 'Ahmet', null, 'Yasin'];
