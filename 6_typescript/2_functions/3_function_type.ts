//* Bir fonksiyon tipini tanımlamayı iki şekilde halledebiliriz:

// 1.yol:
const hesapla1 = (sayi1: number, sayi2: number): number => {
  return sayi1 + sayi2;
};
console.log(hesapla1(10, 20));

// 2.yol:
// İstersek fonksiyonun tipini type anahtar kelimesi ile tanımlayıp
// ardından fonksiyona bu tipi tanımlayabiliyoruz.

// a)fonksiyonun tipinin tanımı
type funcType = (sayi1: number, sayi2: number) => number;
// b) tipe göre fonksiyon tanımı
const hesapla2: funcType = (sayi1, sayi2) => {
  return sayi1 + sayi2;
};

//! Soru:
//* Kişinin bulunduğu konumu ve oranın derecesini parametre olarak alıp
//* geriye "Merhaba, .... konumundaki hava derecesi ... derece" şekilnde bir metin
//* dönderen fonksiyonun hem type'ını hemde kendisini yazınız.

// cevap-1
function havaDurumuMesaji(konum: string, derece: number): string {
  return `Merhaba, ${konum} konumundaki hava derecesi ${derece} derece`;
}
const konum = "İstanbul";
const derece = 20;
const mesaj = havaDurumuMesaji(konum, derece);
console.log(mesaj);

// cevap-2
type funcType1 = (konum: string, derece: number) => string;

const result: funcType1 = (konum, derece) => {
  return `Merhaba, ${konum} konumundaki hava derecesi ${derece} derece`;
};

const mesaj1 = result("Adana", 25);
console.log(mesaj1);

// cevap-3
type loc = (konum: string, derece: number) => string;

const gonder1: loc = (konum, derece) => {
  return ` Merhaba, ${konum}
    konumundaki hava derecesi ${derece}
    derece.
    
    `;
};

const konum1 = "Samsun";
const derece1 = 24;

const text = gonder1(konum1, derece1);
console.log(text);
// cevap-4
type funcType3 = (location: string, degree: number) => string;

const crtText: funcType3 = (location, degree) => {
  return `Merhaba, ${location} konumundaki hava derecesi ${degree} derece`;
};
console.log(crtText("Muğla", 28));
// Ürünün type
type Product = {
  id: number;
  name: string;
  price: number;
};
// Sepet öğesinin type
type CartItem = {
  product: Product;
  quantity: number;
};
// Alışveriş sepetinin tipi
type ShoppingCart = {
  items: CartItem[];
};
// Alışveriş sepetini oluşturma fonksiyonu
function createShoppingCart(): ShoppingCart {
  return { items: [] };
}

function addItemToCart(
  cart: ShoppingCart,
  product: Product,
  quantity: number
): void {
  const itemIndex = cart.items.findIndex(
    (item) => item.product.id === product.id
  );

  if (itemIndex !== -1) {
    // ürün zaten sepete eklenmişsse miktarı arttırır
    cart.items[itemIndex].quantity += quantity;
  } else {
    // Yeni ürün ekleniyorsa, sepete yeni bir öğe olarak ekle
    const newItem: CartItem = { product, quantity };
    cart.items.push(newItem);
  }
  console.log(cart.items);
}
// ürünü sepetteki miktarına göre güncelleme fonksiyonu
function updateItemQuantity(
  cart: ShoppingCart,
  productId: number,
  quantity: number
): void {
  const item = cart.items.find((item) => item.product.id === productId);

  if (item) {
    item.quantity = quantity;
  }
  console.log(item);
}
// Ürünü sepetten çıkarma fonksiyonu
function removeItemFromCart(cart: ShoppingCart, productId: number): void {
  cart.items = cart.items.filter((item) => item.product.id !== productId);
  console.log(cart.items);
}
// Sepetin içerisinde bulunan ürünlerin toplam miktarını hesaplama fonksiyonu
function getTotalQuantity(cart: ShoppingCart): number {
  return cart.items.reduce((total, item) => total + item.quantity, 0);
}
// Sepetteki toplam fiyatını hesaplama
function getTotalPrice(cart: ShoppingCart): number {
  return cart.items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
}
// Sepetteki tüm ürünleri listeleyecek fonksiyon
function listItems(cart: ShoppingCart): void {
  cart.items.forEach((item) => {
    console.log(
      `-${item.product.name}: ${item.quantity} x ${item.product.price}`
    );
  });
}

// Örnek Kullanım
const cart = createShoppingCart();

//Ürünler
const products: Product[] = [
  { id: 1, name: "Phone", price: 500 },
  { id: 2, name: "Laptop", price: 1200 },
  { id: 3, name: "Headphones", price: 100 },
];

addItemToCart(cart, products[0], 2);
addItemToCart(cart, products[1], 1);
addItemToCart(cart, products[2], 3);
updateItemQuantity(cart, 1, 5);
removeItemFromCart(cart, 3);
console.log("Sepetteki ürün miktarı:", getTotalQuantity(cart));
console.log("Sepetteki ürünlerin toplam fiyatı:", getTotalPrice(cart));
// Sepetteki tüm ürünleri listeleme
listItems(cart);
