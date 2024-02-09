/*
 ! state'in nasıl değişeceğine karar veren fonksiyon
 *  aldığı parametreler
 *  >> state'in son hali
 *  >> aldğı emir
 
 ! reducer fonksiyonun döndürdüğü değer state'in son değeri olur 
*/

const reducer = (state, action) => {
  if (action === 'SIFIRLA') {
    return {
      count: 0,
    };
  }

  if (action === 'ARTTIR') {
    return {
      count: state.count + 1,
    };
  }

  if (action === 'AZALT') {
    return {
      count: state.count - 1,
    };
  }
};

export default reducer;
