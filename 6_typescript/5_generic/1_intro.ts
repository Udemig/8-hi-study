/*
    ! Generic:
    * Bir fonksiyonun,type'ın ,class'ın veya interface'in içerisindeki bazı türlerin
    * dinamik olarak değişebilmesini sağlayana yapıdır.Bir generic tür tanımladığımız eğer 
    * herhangi bir kısıtlama yoksa bu tür herhangi bir kılığa bürünebilir.

    Genericle farklı yapılar içerisinde kullanılabilir:
    * 1.Fonksiyonlar
    * 2.Typelar
    * 3.Class'lar da ve Interface'ler de
    


*/
//!  Bir fonksiyon içerisinde generic type nasıl tanımlanır

/*
    * Mesela useState([]) fonksiyonu ele alalım.Bu fonksiyonun parametresine string bir değer 
    * yazdığımızda değişkenin türüde string oluyor.Aynı şekilde parametreye number verdiğimizde 
    * state değişkeninin türü number oluyor.
    * Normal şartlarda bir fonksiyonun parametresinin türüyle dönüş değerinin türü farklı olur ve değişmez ve 
    * ve birbirne bağlı değildir.Fakat bu bağlantıyı kurmak gerektiğinde generic type kullanılır.
    

    * Bir generic type her türde değer alabilir.
    * Generic typelar tanımlandığı fonksiyon içerisinde her yerde aktiftir ve her yerde kullanılabilir.
    * Bir fonksiyonda bir generic type tanımlamak için fonksiyonun isminin bittiği yere "<" ve ">" işaretiyle
    * generic type tanımlama işlevini tamamlarız.Ardından normal parametre listesi ve dönüş türü ve fonksiyonun gövdesi yazılır.
 
*/
function exampleFn1(param1: string, param2: number): number {
  return param2;
}

function exampleFn<ExampleGenericType>(
  param1: string,
  param2: ExampleGenericType
): ExampleGenericType {
  return param2;
}
const test = exampleFn("test", 13);
const test1 = exampleFn("test1", "test1");
console.log(test, typeof test);
console.log(test1, typeof test1);

function exampleFn2<Generic1, Generic2, Generic3>(
  param1: Generic1,
  param2: Generic2,
  param3: Generic3
): Generic1 {
  console.log("param1:", param1, typeof param1);
  console.log("param2:", param2, typeof param2);
  console.log("param3:", param3, typeof param3);
  return param1;
}
exampleFn2("test", 321, true);
const test3 = exampleFn2({ id: 1, name: "test", age: 22 }, false, null);
console.log(typeof test3);

//! useState() fonksiyonunu generic kullanarak yazalım.
// const [counter,setCounter] = useState(0)
// const [string,setString] = useState<string>()

function useState<StateType>(
  initialState: StateType
): [StateType, (newValue: StateType) => void] {
  //....
  console.log("useState fonksiyonu çağrıldı,initialState:", initialState);
  return [
    initialState,
    (newValue: StateType) => {
      console.log("setState fonksiyonu çağrıldı", newValue);
    },
  ];
}

// const [counter, setCounter] = useState(543);
// console.log(counter);
// setCounter(43);

//* Generic type'ın türünü burada spesifik olarak belirleriz
const [counter, setCounter] = useState<number>(32);
//* Burada ise generic type'ın türünü otomatik olarak set edilmesini istemiş oluruz.
const [counter_2, setCounter_2] = useState(55);

/*
    ? Normalde generic typeın türünü set etme zorunluluğu yoktur fakat özellikle union typelarda
    ? (yani birden fazla tür almasını istiyorsak) o zaman bu generic typeın türünü set etmeliyiz.
*/

const [day, setDay] = useState<number | string>(3);
console.log(day);
setDay("pazartesi");

// Genel bir tuple yapısı oluşturmak için nasıl bir generic type kullanırız
function createTuple<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}
// Örnek kullanım
const stringAndNumberTuple = createTuple<string, number>("test", 44);
console.log(stringAndNumberTuple);

const booleanAndObjectTuple = createTuple<boolean, { key: string }>(true, {
  key: "1234",
});
console.log(booleanAndObjectTuple);

/*
    * "T" generic tip, fonksiyonun çağrıldığı an, kullanıldığı türle aynı
    * türde bir nesneyi temsil eder.Yani, bu fonksiyonun her çağrısında fonksiyona geçirilen türü temsil eder.

    - Fonksiyon için şu iki parametre tanımlanmıştır:
    * 1.list:T[] >>> Bu fonksiyona bir dizi geçmenizi sağlar.Ancak bu dizi içierindeki elemanları türü "T"'dir.
    * Yani list parametresi, hangi türde bir dizi alınacağını belirlemek için kullanılır.
    
    * 2.condition:(item:T)=>boolean >>> Bu bir filtreleme koşulu sağlayan fonksiyonu temsil eder.Bu fonksiyon,
    * "T" tiğinde bir eleman alır ve "boolean" türünde bir değer döndermelidir.Koşu sağlayan elemanlar,yeni diziye dahil edilecektir.


*/

interface Person {
  name: string;
  age: number;
}
const people: Person[] = [
  { name: "ali", age: 34 },
  { name: "veli", age: 45 },
  { name: "fatma", age: 29 },
];

function filterList<T>(list: T[], condition: (item: T) => boolean): T[] {
  return list.filter((item) => condition(item));
}
const youngPeople = filterList(people, (person) => person.age < 30);
console.log(youngPeople);

const namesStartingWithA = filterList(people, (person) =>
  person.name.startsWith("a")
);
console.log(namesStartingWithA);

//! Bütün dünyada herkesin bildiği bazı generic type isimlerinin kısaltmaları vardır.
// 1.T(Type):Genellikle genel tür parametresini temsil etmek için kullanılır.

function identity<T>(arg: T): T {
  return arg;
}
// 2.K(Key):Genellikle nesne özelliklerini temsil etmek için kullanılır
// function getPropert<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }
//3.Value(Value):
function createKeyValuePair<K, V>(key: K, value: V): { key: K; value: V } {
  return { key, value };
}
