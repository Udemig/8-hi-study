import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JobList from './pages/JobList';
import AddJob from './pages/AddJob';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/" element={<AddJob />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
