import axios from 'axios';

// istek için gerekli ayarlar
const options = {
  headers: {
    'X-RapidAPI-Key':
      '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com',
  },
  params: {
    lang: 'tr',
    geo: 'TR',
  },
};

// yapılan bütün isteklerin ortak olan başlanguc kısmını belirle
axios.defaults.baseURL = 'https://yt-api.p.rapidapi.com';

// Parametre olarak aldığı url'e istek atıp
// Geriye elde ettiği verileri döndüren
export const getData = async (endpoint) => {
  try {
    // api isteği at
    const res = await axios.get(endpoint, options);

    // fonksiyonun çağrıldığı yere  veriyi döndür
    return res.data;
  } catch (err) {
    console.log('Verileri çekerken bir sorun oluştu', err);
  }
};
