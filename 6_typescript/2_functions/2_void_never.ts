/*
    * Void:
    * Genellikle bir fonksiyonun bir şey döndermediğini ifade 
    * etmek için kullanılır.Yani bir fonksiyonun geriye bir şey döndermeyeceğini
    * ifade eder.
    * Eğer fonksiyonun return tipi "void" ise ya return satırı yoktur varsada 
    * undefined dönderir

*/
function selamla(name: string): void {
  console.log("Merhabalar", name);
  // Fonksiyonu durdurmak için kullanılan return hata vermez
  if (name === "") {
    return;
  }
  //!   return "merhabalar"  >> hata verir çünkü fonksiyonun dönüş türü voiddir
}
const fn1 = selamla("test");
console.log(fn1);

/*
 * Never:
 * Bir fonksiyonun sürekli olarak hata fırlatması durumu için
 * genellikle "hiçbir zaman bu noktaya ulaşılamaz" durumlarında
 * kullanılır.
 */
function errFunciton(message: string): never {
  throw new Error(message);

  console.log("object");
}

try {
  const sonuc = errFunciton("Doğrulama hatası");
  console.log(sonuc);
} catch (error) {
  console.log(error);
}

/*
    * Sonuç olarak:
    * void type'ında return satırı sadece fonksiyonu durdurmak için kullanılabilir.
    * neverda ise return asla kullanılamaz bir hata throw edilir.

*/
// Kullanıcı arayüzüne ilişkin veri yapısı
type User = {
  id: number;
  name: string;
};

const database: User[] = [
  { id: 1, name: "Begum" },
  { id: 2, name: "Mehmet" },
  { id: 3, name: "Nurullah" },
];
// Belirsizlik durumunda bir hata fırlatma işlevi
function throwError(message: string): never {
  throw new Error(message);
}
// Bir kullanıcıyı belirli bir koşula göre arama işlevi
function findUserById(id: number): User {
  const user = database.find((user) => user.id === id);
  if (user !== undefined) {
    return user;
  } else {
    // Kullanıcı bulunamazsa bir hata fırlat
    throwError(`${id} idli kullanıcı bulunamadı.`);
  }
}
// Kullanıcı arama işlemi
try {
  const userId = 5;
  const foundUser = findUserById(userId);
  console.log("Kullanıcı", foundUser);
} catch (error: any) {
  console.log("Error:", error.message);
}
