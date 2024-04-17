/*
 * Interfaceler typeda olduğu gibi farklı bir
 * interfacein özelliklerini miras alabiliyoruz.
 * Bunu "extends" anahtar kelimesi ile yaparız.
 * İstersek birden fazla interface özelliklerini miras alabiliriz.
 */
interface EvEsyasi {
  name: string;
  price: number;
}

interface Mobilya extends EvEsyasi {
  color: string;
}

const masa: Mobilya = {
  name: "Yemek Masası",
  price: 10000,
  color: "black",
};

interface Electronic {
  marka: string;
  garantiSuresi: number;
}
//* Birden fazla interface miras alma
interface Urun extends Electronic, EvEsyasi {}

const tv: Urun = {
  name: "Akılı",
  price: 5000,
  garantiSuresi: 2,
  marka: "LG",
};

const esyaCalistir = (esya: Urun): void => {
  console.log(esya.name, "temizleniyor...");
};

interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface IStockedProduct extends IProduct {
  stockQuantity: number;
}

interface IColorProduct extends IProduct {
  color: string;
}

class ProductService {
  // Tüm ürünleri listele
  listProducts(): IProduct[] {
    return [
      { id: 1, name: "Laptop", price: 40000, description: "Apple Mackbook " },
      { id: 2, name: "Gömlek", price: 300, description: "Pamuk" },
    ];
  }

  // Yeni bir ürün oluştur
  createProduct(product: IProduct): void {
    console.log("Yeni ürün oluşturuldu:", product);
  }

  updateProduct(id: number, product: IProduct): void {
    console.log(`Şu ${id} idli ürün güncellendi.`, product);
  }

  deleteProduct(id: number): void {
    console.log(`Şu ${id} idli ürün silindi.`);
  }
}
const productServive = new ProductService();
const products = productServive.listProducts();
console.log(products);
products.forEach((product) => console.log(product));

const newProduct: IProduct = {
  id: 3,
  name: "Akıllı Telefon",
  price: 4000,
  description: "Samsung",
};
productServive.createProduct(newProduct);
