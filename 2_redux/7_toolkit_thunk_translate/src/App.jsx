import { useDispatch, useSelector } from 'react-redux';
import { getLanguages } from './redux/actions/translateActions';
import { useEffect } from 'react';
import Select from 'react-select';

const App = () => {
  const langState = useSelector((store) => store.language);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  // diziyi bizden istenen formata çevirme
  // nesnlerin içerisindeki code ve name değerlerini
  // value ve label değerlerine çevir
  const formatted = langState.languages?.map((i) => ({
    value: i.code,
    label: i.name,
  }));

  return (
    <div className="bg-zinc-900 h-screen text-white grid place-items-center">
      <div className="w-[80vw] max-w-[1100px] flex flex-col justify-center">
        <h1 className="text-center text-4xl font-semibold mb-7">Çeviri +</h1>

        {/* üst alan */}
        <div className="flex gap-2 text-black">
          <Select className="flex-1" options={formatted} />

          <button className="rounded py-3 px-6 bg-zinc-700 text-white transition hover:ring-2 hover:bg-zinc-800 ">
            Değiş
          </button>

          <select className="flex-1">
            <option>seçenek</option>
          </select>
        </div>

        {/* text alanları */}
        <div className="flex mt-5 gap-[105px] max-md:flex-col max-md:gap-3">
          <div className="flex-1">
            <textarea className="w-full min-h-[300px] max-h-[500px] p-[10px] text-[20px] rounded" />
          </div>

          <div className="flex-1">
            <textarea
              disabled
              className="w-full min-h-[300px] max-h-[500px] p-[10px] text-[20px] rounded"
            />
          </div>
        </div>

        {/* buton */}
        <button className="rounded-md py-3 px-5 text-[17px] font-semibold cursor-pointer bg-zinc-700 mt-3 hover:ring-2 hover:bg-zinc-900 transition">
          Çevir
        </button>
      </div>
    </div>
  );
};

export default App;
