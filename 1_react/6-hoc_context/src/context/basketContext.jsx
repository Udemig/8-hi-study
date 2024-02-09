import { useLocalStorage } from '@uidotdev/usehooks';
import { useState } from 'react';
import { createContext } from 'react';
import { toast } from 'react-toastify';

// 1) context yapısı tanımla
export const BasketContext = createContext();

// 2) context'de tutulan verileri uygulamay aktaracak bir sağlayacı bileşeni tanımla
export function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage('basket', []);

  // sepete ürün ekler
  const addToBasket = (newProduct) => {
    //1) bu üründen sepette var mı kontrol et
    const found = basket.find((i) => i.id === newProduct.id);

    if (found) {
      //2) ürün sepette varsa > miktarını 1 arttır
      //a) bulanan ürünün miktarını 1 arttır
      const updated = { ...found, amount: found.amount + 1 };

      //b) sepet dizisindeki eski ürünü n yerine güncel halini koy
      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );

      //c) state'i güncelle
      setBasket(newBasket);

      toast.info(`Ürün miktarı arttırıldı (${updated.amount})`);
    } else {
      //3) ürün sepette yoksa > ürünü sepete ekle (miktarı 1'e eşitle)
      setBasket([...basket, { ...newProduct, amount: 1 }]);

      toast.success('Ürün sepete eklendi');
    }

    console.log(basket);
  };

  //  ürünü sepetten kaldır
  const removeFromBasket = (delete_id) => {
    // septteki ürünü bul
    const found = basket.find((i) => i.id === delete_id);

    if (found.amount > 1) {
      // miktarı 1 den fazlaysa > miktarını 1 eskilt
      const updated = { ...found, amount: found.amount - 1 };

      const newBasket = basket.map((i) =>
        i.id === updated.id ? updated : i
      );

      setBasket(newBasket);

      toast.info(`Ürün miktarı azaltıldı (${updated.amount})`);
    } else {
      // miktarı 1'e eşitse > ürünü diziden kaldır
      const filtred = basket.filter((i) => i.id !== delete_id);

      setBasket(filtred);

      toast.error(`Ürün sepetten kaldırıldı`);
    }
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
}
