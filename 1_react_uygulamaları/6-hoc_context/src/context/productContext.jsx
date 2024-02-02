import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

/*
  * Context API
  * Uygulamada birden çok bileşin ihtiyacı olan verileri
  * Bileşlnlerden bağımsız bir şekilde konumlanan merkezerlde
  * yönetmeye yarar.
  
  * Context yapısı içserinde verilerin state'ini ve verileri değiştirmeye
  * yarayan fonksiyonlar tutulabilir.
  * 
  * Context, tutuğumuz değişkenleri beileşenler doğrudan aktarım yapbilen
  * Merkezi state yönetim aracıdır.

*/

//! Context yapısının temelini oluşturma
export const ProductContext = createContext();

//! Sağlayıcı ve onun tuttuğu verileri tanımla
export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    // önceki ürünleri kaldır > yükleniyoru tetikler
    setProducts(null);

    // hangi url'e istek atılcaığını belirle
    const url =
      category === 'all'
        ? 'https://fakestoreapi.com/products'
        : `https://fakestoreapi.com/products/category/${category}`;

    // api isteği at
    axios
      .get(url)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [category]);

  // context yapısında tuttuğumuz verileri beileşneler sağla
  // Value olarak eklenen veriler projedeki bütün bileşnler tarafından
  // erişlebilir olur
  return (
    <ProductContext.Provider
      value={{ products, category, setCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
}
