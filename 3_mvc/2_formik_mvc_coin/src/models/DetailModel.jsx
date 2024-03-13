import axios from 'axios';
import { SiCoinmarketcap } from 'react-icons/si';
import { MdEventAvailable, MdPriceChange } from 'react-icons/md';
import { FaPercent } from 'react-icons/fa';
import { RiStockFill } from 'react-icons/ri';

export default class DetailModel {
  constructor(coin) {
    // coin verilerini class'tan alıncak örneğin içine gönder
    this.coin = coin;

    // detay verilerinden oluşan bir dizi
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: 'Market Hacmi',
        value: coin?.detail.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: 'Tedarik',
        value: coin?.detail.maxSupply,
      },
      {
        icon: <MdPriceChange />,
        label: 'Fiyat',
        value: coin?.detail.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: '24s Değişim (%)',
        value: coin?.detail.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: '24 Hacim',
        value: coin?.detail.volumeUsd24Hr,
      },
    ];

    // grafik için kullanılacak veri
    this.graphicData = {
      labels: coin?.history.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          id: 1,
          label: 'Fiyat',
          data: coin?.history.map((i) => i.priceUsd),
          borderColor: 'red',
          backgroundColor: 'orange',
        },
      ],
    };
  }

  // api'dan hem fiyat hem detay verisini al
  static async getCoin(id) {
    // Birden fazla api isteğini aynı anda atma
    const response = await Promise.all([
      axios.get(`https://api.coincap.io/v2/assets/${id}`),

      axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`),
    ]);

    return {
      detail: response[0].data.data,
      history: response[1].data.data,
    };
  }
}
