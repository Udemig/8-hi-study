/*
    ! Intersection Types
    * Ts'de intersection types(kesişim türleri) iki veya daha fazla türü birleştirmek için 
    * kullanılan bir özelliktir.

*/

// ! Union type ile arasındaki fark
/*
    1.
    * Union type belirtilen türlerden en az birinin sahip olduğu bir türdür.
    * Yani typeA veya typeB veya her ikiside olabilir.
*/
type typeA = {
  propA: string;
};
type typeB = {
  propB: number;
};

type unionType = typeA | typeB;

let varName: unionType;

varName = { propA: "Selam" }; // veya
varName = { propB: 32 }; // veya
varName = { propA: "selam", propB: 45 }; // typeA veya typeB

/*
    2.
    * Intersection type, iki veya daha fazla türün özelliklerini birleştiren bir türdür.
    * Yani hem typeC hem de typeD nin özelliklerini içermek zorundadır.
*/

type typeC = {
  propC: string;
  ortakProp: number;
};
type typeD = {
  propD: boolean;
  ortakProp: number;
};
type intersectionType = typeC & typeD;

let varName1: intersectionType;
// varName1 = { propC: "selam", ortakProp: 44 };
// varName1 = { propD: true, ortakProp: 99 };
varName1 = { propC: "Selam", propD: true, ortakProp: 55 };

/*
    ! Farklar
    - Union Type:
    * "veya" ilişkisini temsil eder.
    * En az bir türü içerir.
    * Tipler arasında ortak özellikler üzerine bir zorunluluk getirmez.
    * Genellikle farklı durumları temsil etmek için kullanılır.
    
    - Intersection Type:
    * "ve" ilişkini temsil eder.
    * Tüm belirtilen tiplerin özelliklerini birleştirir.
    * Genellikle bir nesnenin birden fazla türün özelliklerini taşımasono ifade etmek için kullanılır.
*/

interface BusinessPartner {
  name: string;
  credit: number;
}
interface Identity {
  id: number;
  name: string;
}
interface Contact {
  email: string;
  phone: string;
}

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

let e: Employee = {
  email: "example@gmail.com",
  name: "test",
  id: 1,
  phone: "123123123123",
};
let c: Customer = {
  name: "ABC",
  credit: 1000000,
  email: "test@gmail.com",
  phone: "444 444 444",
};
type Employeee = Identity & BusinessPartner & Contact;

let e1: Employeee = {
  id: 100,
  name: "test",
  credit: 100000,
  email: "@gmail.com",
  phone: "408 897 54234",
};
/*
    Mevcut türlerin tüm özelliklerine sahip yeni bir tür oluşturmak için iki veya daha fazla 
    türü birleştirir.Türleri birleştirdiğinizde tür sırası önemli değildir.
*/
