/*
 * Object Type
 * Normal şartlarda typescript'de bir object type'ı mevcuttur. Object type'ı ucu açık bir tip olduğu için kullanılması tercih edilmez.
 
 * JS, nesne tabanlı bir prgramlama dili olduğu için bir çok yapı (diziler,fonksiyonlar,date) nesnelerden oluşur. Objec type kullanırsak net bir şekilde type'ını belileyemiyoruz.

 * Biz genelde daha spesifik bir şekilde özellikleri olan nesneler ile çalışır. Bu noktada nesnenin özelliklerinin tipini belitliyecez. Hem ts hata durmunu izliyecek hem de oto. tamalama özelliği devreye girecek.
*/

let data: object = {};

let data2: object = [];

let data3: object = new Date();

let data4: object = function () {};

// Değişkenin tipini tanımlama
let student: {
  id: number;
  firstname: string;
  lastname: string;
  isGraduated: boolean;
  age?: number; // opsiyonel değer tanımlama
};

// Değişkenin değerini tanımlama
student = {
  id: 45,
  firstname: 'Ahmet',
  lastname: 'Yıldırım',
  isGraduated: false,
};

//  API'dan alınan verinin tipini tanımlayalım

let user: {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string | number;
    suite: string | number;
    city: string;
    zipcode: string | number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string | number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

user = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: -37.3159,
      lng: 81.1496,
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

// tipi tanımlı olduğu için otomatik tamamlama desteği sununucak
// hemde hata kontrolü yapıcak
console.log(user.address.street);
console.log(user.company.name);

// normalde ts dosyalarını çalıştırmak için önce js ye derleyip sonra çalıştıtırır
// bunun için iki darklı komut yazmamız gerekir biz bunun yerine ts-node kullarnak tek komuta indiricezsd
