import { createAsyncThunk } from '@reduxjs/toolkit';
import { headers } from './../constants/index';
import axios from 'axios';

// api'lardan bayark ve ülke corona verisini alıcak ve slice'a aktarıcak asenkron thunk aksiyonu yazalım
export const getData = createAsyncThunk('countryData', async (isoCode) => {
  // api isteğinde kullanılcak parametreyi belirle
  const params = { q: isoCode };

  // corona bilgilerini alıcağımız api isteğinni ayarla
  const req1 = axios.get(`https://covid-19-statistics.p.rapidapi.com/reports`, {
    params,
    headers,
  });

  // ülke detaylarını alıcağımız api isteğini ayarla
  const req2 = axios.get(`https://restcountries.com/v3.1/name/${isoCode}`);

  // her iki api isteğini senkron / paralel bir şekilde gönder
  const responses = await Promise.all([req1, req2]);

  // covid bilgilerindeki region nesnesini coivid nesnesi içerisne dağıt
  const covid = {
    ...responses[0].data.data[0],
    ...responses[0].data.data[0].region,
  };

  // gereksiz değerleri kaldır
  delete covid.region;
  delete covid.cities;

  // payloadı return edicez
  return {
    covid,
    country: responses[1].data[0],
  };
});
