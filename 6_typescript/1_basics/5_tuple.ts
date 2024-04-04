/*
 * Tuple Type:
 * Typescript ile birlikte hayatımıza giren bir veri tipidir.
 * Uzunluğu sabit ve elemanlarının sırası / tipi belirli olan dizilerin tipini tanımlamak içi kullanırız.
 
 * Bir dizi içerisnde tipleri sıralarız
 * Örn: [number,string,string,object] 
*/

// Örnek 1
const ders1: [string, number] = ['programlama', 3];

// Örnek 2
const gradient: [string, number, number] = ['to right', 252525, 909043];

//  SORU: |  bu union types kullanımı ile aynı şey mi?
const gradient2: (string | number)[] = [252525, 'to right', 909043, 'asdasd'];

// CEVAP: hayır, benzer ama işlevesel anlamda biraz daha farklı unionTypes kullanımı dizideki elemnaların sırası veya sayısını belirleme gibi bir özelliği sahip değil.

// Örnek 3
// Bir css rgba/rgb renginin verilerini dizi içerisnde tutmak istedik
// rgb(123,56,78)
// rgba(123,56,78,0.75)

// yukarıdaki örnekte opactiy değerinin opsiyonel olması gerekli
// tuple'da bir değeri opsiyonel yapmak için tipinin sonuna ? konur
let color: [number, number, number, number?];

color = [123, 56, 78];
color = [123, 56, 78, 0.7];

// KURAL: opsiyonel bir değerin ardından gelicek olan bütün değerler mutlaka opsiyonel oılmalı

let date: [number, string?, number?];

// 3 değeride tanımladık
date = [10, 'Ocak', 2023];

// sonuncu opsiyonel değeri tanımlamadık
date = [10, 'Ocak'];

// son 2 opsiyonel değeri tanımlamadık
date = [10];

// 1. ve 3. değerleri tanımladık
date = [10, undefined, 2023];

//* Gerçek Proje Örneği
//* useState | useSearchParams veya kendi yazmış olduğumuz herhangi bir react hooku genelde uzunluğu ve elemanların sırası belli olan diziler döndürür. bu noktadada useStata gibi hookların döndürdğü değelerini irpini tanımlamak için tuple kullanabiliriz

//* const [text,setText] = useState()

//* type > [string,function]
