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
  const [category, setCategory] = useState(null);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setProducts(res.data));
  }, []);

  // context yapısında tuttuğumuz verileri beileşneler sağla
  // Value olarak eklenen veriler projedeki bütün bileşnler tarafından
  // erişlebilir olur
  return (
    <ProductContext.Provider value={{ products, category }}>
      {children}
    </ProductContext.Provider>
  );
}
