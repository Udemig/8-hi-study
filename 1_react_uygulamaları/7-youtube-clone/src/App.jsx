import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import VideoDetail from './pages/VideoDetail';
import SearchResult from './pages/SearchResult';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/detail" element={<VideoDetail />} />
        <Route path="/result" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
