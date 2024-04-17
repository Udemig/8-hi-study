/*
    ! Classlarda generic kullanımı
    * Aynı fonksiyonlarda olduğu gibi class isminden sonra büyük küçük işaretleri arasında
    * generic type isimleri yazılır.Sonra class gövdesi içerisinde bu genericler kullanılır.
*/
class ExampleClass<Generic1, Generic2> {
  prop1: Generic1;
  prop2: Generic2;
  prop3: string;
  constructor(param1: Generic1, param2: Generic2, param3: string) {
    this.prop1 = param1;
    this.prop2 = param2;
    this.prop3 = param3;
  }

  setProp(param1: Generic1): ExampleClass<Generic1, Generic2> {
    this.prop1 = param1;
    return this;
  }
  getProp(): Generic1 {
    return this.prop1;
  }
}
const obj1 = new ExampleClass<number, string>(12, "test", "example ");
console.log(obj1.setProp(3));

/* Generic Typeların base(parent) classlarını belirlemek */
class ExampleClass_1 {
  prop1: string = "ExampleClass_1";
}
class ExampleClass_2 {
  prop1: string = "ExampleClass_2";
}
class ExampleClass_3 {
  prop2: string = "ExampleClass_3";
}
class ExampleClass_4 {
  prop2: string = "ExampleClass_4";
}

class ExampleClass_5<Generic1 extends ExampleClass_1> {
  prop1: Generic1;
  constructor(param1: Generic1) {
    this.prop1 = param1;
  }
}
const test = new ExampleClass_5(new ExampleClass_2());
console.log(test.prop1);

class DataCollection<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }
  getAll(): T[] {
    return this.data;
  }
  getItem(index: number): T {
    return this.data[index];
  }
  removeItem(item: T): void {
    this.data = this.data.filter((existingItem) => existingItem !== item);
  }
}
const numberCollection = new DataCollection<number>();
numberCollection.add(1);
numberCollection.add(2);
numberCollection.add(3);
numberCollection.add(4);
[1, 2, 3, 4];
console.log(numberCollection.getAll());
console.log(numberCollection.getItem(0));
numberCollection.removeItem(2);
console.log(numberCollection.getAll());
