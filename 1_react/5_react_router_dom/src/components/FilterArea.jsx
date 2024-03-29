import { useSearchParams } from 'react-router-dom';

const FilterArea = () => {
  // useParams url'deki arama parametrelerini yönetmemizi sağlar
  // geriyi dizi içiernde iki eleman döndürür
  // 1- urldeki arama parametreleri
  // 2- bunları değitrmeye yarayan method
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    // eklenicek parameteryi belirle
    searchParams.set('sırala', e.target.value);
    // url'i güncelle
    setSearchParams(searchParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eklenicek parameteryi belirle
    searchParams.set('aramaTerimi', e.target[0].value);
    // url'i güncelle
    setSearchParams(searchParams);
  };

  return (
    <div className="mt-4 gap-3 d-flex justify-content-between align-items-center">
      <div className="d-flex gap-3 align-items-center">
        <label>Sırala</label>
        <select onChange={handleChange} className="form-select">
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          placeholder="kitap ismi giriniz"
          className="form-control"
          type="text"
        />
        <button className="btn btn-primary">Ara</button>
      </form>
    </div>
  );
};

export default FilterArea;
