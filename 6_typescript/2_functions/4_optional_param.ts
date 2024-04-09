/*
    * Optional Param(Opsiyonel Parametre)

    * Normal şartlarda typescriptde hata almamak için fonksiyonların
    * tüm parametrelerini doldurmamız gerekir.
    * Bazı parametrelerin tanımlanmadığı sorun yaratmayacak fonksyionlar olabilir.
    * Bu durumda bu parametreyi opsiyonel yaparız.
    

    * Özellikler:
    * tanım(a:number,b?:string)
    * Opsiyonel parametrelere istersek undefined değerini gönderebiliriz.
    * İsterksek de hiç değer göndermeyebiliriz.
    
    * Opsiyonel olan parametreye hiç değer göndermezsek bu parametreinin değeri ve tipi undefined
    * Opsiyonel olan parametreler hep en sonda yer almalı opsiyonel parametreinin ardından zorunlu parametre gelemez.
    * Değer gönderilirkende ya type'a uygun değer gönderirirz ya da hiç değer göndermeyiz.

*/
function exampleFun(
  param1: number,
  param2: string,
  param3?: object,
  param4?: object
) {
  console.log(">>> param1:", param1, typeof param1);
  console.log(">>> param2:", param2, typeof param2);
  console.log(">>> param3:", param3, typeof param3);
  console.log(">>> param4:", param4, typeof param4);
}

exampleFun(20, "Selam", { id: 1 }, { name: "test" }); // Dördüde tanımlanabilir
exampleFun(1, "sad", undefined, {}); // Opsiyonel olanlardan birini girmek istemeyebiliriz.
exampleFun(34, "merhaba");

type Book = {
  title: string;
  author: string;
  year: number;
};

function addBook(title: string, author: string, year?: number): void {
  let newBook: Book = {
    title: title,
    author: author,
    year: year || new Date().getFullYear(), // Eğer yıl belirtilmemişse şu anki yılı kullan
  };
  console.log("Yeni kitap eklendi:", newBook);
}
addBook("Typescript 101", "John Doe", 1999);
