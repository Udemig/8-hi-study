import { useEffect, useState } from "react";

/*
    ! Custom Hook
    * React hooklarına benzer şekilde görev yapan
    * projenin ihtiyacına göre kendimiz oluşturduğumuz
    * görevini bizim belirlediğimiz hooklardır.
    * Genelde veriyi ve veriyi güncelleyecek fonksiyonu dizi içinde dönerler.
*/
export function useLocaleStorage<T>(key: string, initialValue: T) {
  //* 1.adım:statei tanımla
  const [value, setValue] = useState<T>(() => {
    //* 2.adım:localStoragedan verileri al.
    const jsonValue = localStorage.getItem(key);
    //* 3.adım:localStorageda eleman yoksa initialValue tanımla
    if (jsonValue === null) {
      return initialValue;
    } else {
      //* 4.adım:localStoregada eleman varsa localdeki veriyi state aktar
      return JSON.parse(jsonValue);
    }
  });
  //* 5.adım:state her değiştiğinde localStorega ı güncelle
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  //* 6.adım:Hookun kullanılması için statei ve değiştirme methodunu return et
  return [value, setValue] as [T, typeof setValue];
}
