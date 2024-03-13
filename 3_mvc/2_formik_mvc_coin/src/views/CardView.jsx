import millify from 'millify';
import { Link } from 'react-router-dom';

const CardView = ({ data }) => {
  return (
    <Link
      to={`/coin/${data.id}`}
      className="coin-card d-flex flex-column justify-content-between border rounded p-3 text-decoration-none text-white"
    >
      <div>
        <h3>{data.name}</h3>
        <h6>{data.symbol}</h6>
        <p>${millify(data.priceUsd)}</p>
      </div>

      <p>
        <span>Günlük Değişim: </span>
        <span className={data.changePercent24Hr >= 0 ? 'up' : 'down'}>
          %{Number(data.changePercent24Hr).toFixed(2)}
        </span>
      </p>
    </Link>
  );
};

export default CardView;
