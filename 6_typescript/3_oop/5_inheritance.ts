/*
    ! Inheritance(Kalıtım)

*/
class ExampleClass {
  prop1?: string;
  prop2?: number;
  method1() {
    console.log("ExampleClass method1 çalıştırıldı");
  }
  method2() {
    console.log("ExampleClass method2 çalıştırıldı");
  }
}

class ChildrenClass extends ExampleClass {
  /*
        * ExampleClass içerisindeki tüm property ve methodlar buraya otomatik olarak kopyalanır.
        * Bu kopyalanan method veya propertyleri istersek bazı kurallar çerçevesinde değiştirebiliyoruz ya da
        * tamamen fakrlı ve yeni propertyler ve methodlar ekleyebiliriz.
    
        * Mevcut bir propertyi veya methodu değiştirmek istersek (bu işleme override denir.) bunu o elemanın prototipine uygun olacak
        * şekilde değiştirmemiz gerekir.Dönüş türü voidi değiştirebiliriz ve yeni paremetre ekleyemeyiz
    */
  method1(): string {
    return "test";
  }
}
const obj = new ChildrenClass();
console.log(obj.method1());
obj.method2();

class Human {
  hair_color: string;

  running() {
    console.log("Koşuyor");
  }
}
class Father extends Human {
  hair_color: "brown";
}
class Mothher extends Human {
  hair_color: "black";
}
class Son extends Father {}

const test = new Son();
test.hair_color;

const any_people = new Human();
any_people.hair_color;
