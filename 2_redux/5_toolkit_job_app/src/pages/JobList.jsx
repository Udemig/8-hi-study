import axios from 'axios';
import { useEffect } from 'react';
import { setLoading, setError, setJobs } from '../redux/slices/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Card from '../components/Card';

const JobList = () => {
  const jobState = useSelector((store) => store.jobReducer);

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
    <div className="list-page">
      {/* 
      1) Yüklenme devam ediyorsa ekrana loader bas
      2) Yüklenme bittiyse ve hata varsa ekrana hatayı ve tekrar dene butonu bas
      3) Yüklenme bittiyse ve hata yoksa kartları ekrana bas
      */}

      {jobState.isLoading ? (
        <Loader />
      ) : jobState.error ? (
        <Error text={jobState.error} retry={getJobs} />
      ) : (
        <div className="job-list">
          {jobState.jobs.map((job) => (
            <Card key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
