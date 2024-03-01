import { useDispatch, useSelector } from 'react-redux';
import { getLanguages, translateText } from './redux/actions/translateActions';
import { useEffect, useMemo, useState } from 'react';
import Select from 'react-select';
import Loader from './components/Loader';
import { updateText } from './redux/slices/translateSlice';

const App = () => {
  const langState = useSelector((store) => store.language);
  const translateState = useSelector((store) => store.translate);

  const [sourceLang, setSourceLang] = useState({
    value: 'tr',
    label: 'Turkish',
  });
  const [targetLang, setTargetLang] = useState({
    value: 'en',
    label: 'English',
  });
  const [text, setText] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  // diziyi bizden istenen formata çevirme
  // nesnelerin içerisindeki code ve name değerlerini
  // value ve label değerlerine çevirdik.
  // diziyi formatlama işleminin her render sırasında olmasını istemedğimiz için useMemo kullanarak cache'e gönderdik.
  const formatted = useMemo(
    () =>
      langState.languages.map((i) => ({
        value: i.code,
        label: i.name,
      })),
    [langState.languages]
  );

  // değişme fonksiyonu
  const handleChange = () => {
    // select alanlarındaki değerleri değiştir
    setSourceLang(targetLang);
    setTargetLang(sourceLang);

    // text alanlarındaki değerleri değiştir
    setText(translateState.text);

    // slice'daki text değerini güncelle
    dispatch(updateText(text));
  };

  return (
    <div className="bg-zinc-900 h-screen text-white grid place-items-center">
      <div className="w-[80vw] max-w-[1100px] flex flex-col justify-center">
        <h1 className="text-center text-4xl font-semibold mb-7">Çeviri +</h1>

        {/* üst alan */}
        <div className="flex gap-2 text-black">
          <Select
            isLoading={langState.isLoading}
            isDisabled={langState.isLoading}
            value={sourceLang}
            onChange={setSourceLang}
            className="flex-1"
            options={formatted}
          />

          <button
            onClick={handleChange}
            className="rounded py-2 px-6 bg-zinc-700 text-white transition hover:ring-2 hover:bg-zinc-800 "
          >
            Değiş
          </button>

          <Select
            isLoading={langState.isLoading}
            isDisabled={langState.isLoading}
            onChange={setTargetLang}
            className="flex-1"
            options={formatted}
            value={targetLang}
          />
        </div>

        {/* text alanları */}
        <div className="flex mt-5 gap-[105px] max-md:flex-col max-md:gap-3">
          <div className="flex-1">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full min-h-[300px] max-h-[500px] p-[10px] text-[20px] rounded text-black"
            />
          </div>

          <div className="relative flex-1">
            <textarea
              value={translateState.text}
              disabled
              className="w-full min-h-[300px] max-h-[500px] p-[10px] text-[20px] rounded"
            />
            {/* todo */}
            {translateState.isLoading && <Loader />}
          </div>
        </div>

        {/* buton */}
        <button
          onClick={() =>
            dispatch(translateText({ sourceLang, targetLang, text }))
          }
          className="rounded-md py-3 px-5 text-[17px] font-semibold cursor-pointer bg-zinc-700 mt-3 hover:ring-2 hover:bg-zinc-900 transition"
        >
          Çevir
        </button>
      </div>
    </div>
  );
};

export default App;
