/*
    ! Type Guards
    * Type guard'ın amacı tip hakkında bilgi almak ve doğru tipe ulaşmaktır.
    * Belirli bir türdeki bir değeri kontrol etmek ve bu türe özgü işlemleri gerçekleştirmek için kullanılan tekniklerdir.
    * İki yayhgın type guard yöntemi vardır.(type of , instanceof)
*/
//* Type Of
/*
    Bir değişkenin türünü kontrol etmek için kullanılır.Bu genellikle 
    ilkel veri tipleri ve string,number,boolean gibi türlerde kullanılır.
*/
function logValue(input: string | number): void {
  console.log(typeof input);
  if (typeof input === "string") {
    console.log(`Girilen değer bir string: ${input.toUpperCase()}`);
  } else {
    console.log(`Girilen değer bir sayı:${input}`);
  }
}
logValue("selam");
logValue(34);
// logValue(true);

//* instanceof
/*
 * instanceof operatörü bir nesnenin belirli bir sınıfın(class) örneği olup olmadığını kontrol etmek için kullanılır.
 * Bu nesne tabanlı programlamada sıkça kullanılır.
 */

class Rabbit {}
let rabbit = new Rabbit();
rabbit = 10;
console.log(rabbit instanceof Rabbit);

class Animal {
  sound(): void {
    console.log("Ses çıkarma");
  }
}
class Dog extends Animal {
  bark(): void {
    console.log("Havlıyor");
  }
}

function makeSound(animal: Animal): void {
  // Eğer animal parametresi bir dog sınıfı örneği ise
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    // diğer durumda genel methodu çağır
    animal.sound();
  }
}
const myAnimal = new Dog();
makeSound(myAnimal);

//! in
type User = {
  name: string;
  age: number;
};
function processUser(user: User | string | number): void {
  if (typeof user === "object" && "name" in user) {
    // Eğer "user" bir nesne ve "name" özelliğine sahip
    console.log(`Kullanıcı adı:${user.name}`);
  } else if (typeof user === "string") {
    console.log(`Girilen isim:${user}`);
  } else {
    console.log("Geçersiz kullanıcı");
  }
}
processUser("Ali"); // Girilen isim
processUser({ name: "Veli", age: 45 }); // Kullanıcı adı:
processUser(43);
