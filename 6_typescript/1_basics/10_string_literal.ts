/*
 * String literal
 * Bir metnin tipini tanımlamak yerine alabilceği değerleri doğrudan tamımlaya ve metinlerde daha net bir değer kısıtlaması yapmamıza olanak sağlar.
 */

type userType = {
  id: number;
  name: string;
  type: 'admin' | 'user' | 'seller'; // string literal
};

const newUser: userType = {
  id: 12356,
  name: 'Ali',
  type: 'seller',
};

// Örnek
// Bir araba kiralama sitesi için api'dan gelen araba verilerin tipini tanımla

type CarType = {
  make: string;
  model: string | number; // union type
  gearbox: 'automatic' | 'manuel' | 'semi-auto'; // string literal
  year: number;
  type: 'awd' | 'fwd' | 'rwd'; // string literal
};

const newCar: CarType = {
  make: 'Honda',
  model: 'Civic',
  gearbox: 'automatic',
  year: 2013,
  type: 'fwd',
};

//  CEVAP

type ProjeType = string | number | boolean | Array<any> | object;

let aString: ProjeType = 'Yusuf';
let proNumber: ProjeType = 123;
let myBoolean: ProjeType = true;
let myArray: ProjeType = [1, 2, 3];
let myObject: ProjeType = { key: 'value' };

// CEVAP
type modelCar = {
    name: string;
    modeller: (string|number)[];
    ozellikler: { [key: string]: any };
};

const model: modelCar = {
    name: “Mercedes”,
    modals: [“CLS500”, “CLA250”, “bulamadim 😄”],
    detail: { color: “size”, boyut: “medium” }
};

//  CEVAP:
type marketStatus = "active" | "inactive";

type gearBox = "automatic" | "manuel";

type CarObject = {
    name: string;
    model: number;
    isOnMarket: boolean;
    modelTitle: string[];
    details: {
        gearbox: gearBox;
        onMarket: marketStatus;
    };
}

const cars: CarObject = {
    name: "Mercedes",
    model: 2015,
    isOnMarket: true,
    modelTitle: ["E200","CLK", "Compressor"],
    details: {
        gearbox: "automatic",
        onMarket: "active"
    }
};