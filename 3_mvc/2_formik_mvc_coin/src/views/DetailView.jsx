import millify from 'millify';
import { Chart as Chartjs } from 'chart.js/auto';
import { Line, Bar } from 'react-chartjs-2';

const DetailView = ({ model }) => {
  return (
    <div className="overflow-x-hidden">
      <h3 className="text-center">
        <span className="me-3 fs-4 font-bold">{model.coin?.detail.symbol}</span>
        <span className="fs-2 text-warning">{model.coin?.detail.name}</span>
      </h3>

      <div className="row">
        <section className="col-md-3 d-flex flex-column gap-5 p-5 p-md-4">
          {model?.infoFields?.map((item, i) => (
            <div
              className="text-bg-light rounded shadow-lg text-center p-3"
              key={i}
            >
              <span className="fs-2">{item.icon}</span>
              <h4>{item.label}</h4>
              <p className="fw-bold">{millify(item.value)}</p>
            </div>
          ))}
        </section>

        <section
          className="col-md-9 d-flex flex-column gap-5
        p-5 p-md-4"
        >
          <Line data={model?.graphicData} />
          <Bar data={model?.graphicData} />
        </section>
      </div>
    </div>
  );
};

export default DetailView;
