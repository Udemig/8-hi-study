/*
    ! Type Casting(Tür dönüşümü)
    * Bir değişkenin türünü bir başka türe dönüştürme işlemidir.
*/

/*
    Gerçek hayattan bir örnekte bir e-ticaret uygulamasını düşünelim.
    Kullanıcının sepetindeki ürünleri API'den alıyoruz ve bu ürününlerin 
    fiyatlarını, bazı durumlarda metin olarak alıyoruz.Ancak uygulamamızda fiyatları
    sayısal bir formatta kullanmak istiyoruz.

*/
let productFromAPI = {
  name: "Laptop",
  price: "1500.00", // Fiyat string olarak gelmiş olsun
};
let productPrice: number = Number(productFromAPI.price) as number;
console.log(typeof productPrice);
console.log(typeof productFromAPI.price);

let discountedPrice: number = productPrice - 100;

console.log(discountedPrice);

const mixedData: any = {
  name: "test",
  age: 25,
  isStudent: true,
  courses: ["Math", "English", "History"],
};
if (typeof mixedData === "object" && mixedData !== null) {
  const personData: {
    name: string;
    age: number;
    isStudent: boolean;
    id: number;
  } = mixedData as {
    name: string;
    age: number;
    isStudent: boolean;
    id: number;
  };

  console.log(
    `Name:${personData.name},Age:${personData.age}, Is Student:${personData.isStudent} `
  );
} else {
  console.log("Veri tipi uygun değil");
}

function birlestirmek(a: string | number, b: string | number): string {
  if (typeof a === "string" || typeof b === "string") {
    // "a" veya "b" en azından biri bir string ise tip dönüşümü yaparak string olarak birleştir
    return (a as string) + (b as string);
  } else {
    // İki değişken de sayı tipindeyse tip dönüşümü yaparak sayıları topla
    return (((a as number) + b) as number).toString();
  }
}
// string birleştirme
const result1: string = birlestirmek("Hello", "World");
console.log(result1);
// sayıları toplama ve sonrasında stringe çevirme
const result2: string = birlestirmek(5, 10);
console.log(result2);
