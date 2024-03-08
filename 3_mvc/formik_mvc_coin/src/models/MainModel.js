import axios from 'axios';

// anasayfanın model katmanı
export default class MainModel {
  // api'dan coin verilerini alır
  static async getCoins(page) {
    try {
      const params = {
        offset: (page - 1) * 15, // kaç tane veri atlanıcak
        limit: 15, // kaç veri alınıcak
      };

      const res = await axios.get('https://api.coincap.io/v2/assets', {
        params,
      });

      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
}
