import { FaBitcoin } from 'react-icons/fa';
import CardView from './CardView';
import millify from 'millify';
import { useNavigate } from 'react-router-dom';

const MainView = ({ coins, setPage }) => {
  const navigate = useNavigate();

  return (
    <div className="container-xl mt-5">
      <h4 className="d-flex align-items-center gap-3">
        <FaBitcoin />
        <span>Hoş Geldiniz, Coin Listesi</span>
      </h4>

      <p>
        Coin Listesi, dünya genelindeki kripto para birimlerini ve dijital
        varlıkları takip etmek için mükemmel bir kaynaktır
      </p>

      <div className="d-flex gap-4 justify-content-around my-5">
        {coins?.slice(0, 3)?.map((data) => (
          <CardView key={data.id} data={data} />
        ))}
      </div>

      {/* tablo */}
      <table className="table table-dark table-striped table-hover table-responsive mt-5">
        <thead>
          <th>#</th>
          <th>coin</th>
          <th>fiyat</th>
          <th>markey hacmi</th>
          <th>işlem hacmi</th>
          <th>%değişim (24s)</th>
        </thead>

        <tbody>
          {coins.map((coin) => (
            <tr onClick={() => navigate(`/coin/${coin.id}`)} key={coin.id}>
              <td>{coin.rank}</td>
              <td>
                <span className="text-warning me-2">{coin.symbol}</span>
                <span>{coin.name}</span>
              </td>
              <td>${millify(coin.priceUsd)}</td>
              <td>${millify(coin.marketCapUsd)}</td>
              <td>${millify(coin.volumeUsd24Hr)}</td>
              <td className={coin.changePercent24Hr >= 0 ? 'up' : 'down'}>
                %{Number(coin.changePercent24Hr).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* daha fazla butonu */}
      <div className="d-flex justify-content-center my-5">
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="more-btn"
        >
          Daha Fazla
        </button>
      </div>
    </div>
  );
};

export default MainView;
