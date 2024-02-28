import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JobList from './pages/JobList';
import AddJob from './pages/AddJob';
import Header from './components/Header';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setError, setJobs, setLoading } from './redux/slices/jobSlice';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();

  // api isteği atıp cevabı store'a bildirir
  const getJobs = () => {
    // slice'taki yükleniyor'u true ya çek
    dispatch(setLoading());

    // api isteği at
    axios
      .get('http://localhost:3001/jobs')
      // slice'daki veriyi güncelle
      .then((res) => dispatch(setJobs(res.data)))
      // slice'daki erroru güncelle
      .catch((err) => dispatch(setError(err.message)));
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<JobList getJobs={getJobs} />} />
        <Route path="/add" element={<AddJob />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
