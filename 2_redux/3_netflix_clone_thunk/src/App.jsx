import {
  BrowserRouter as Router,
  Route as Yol,
  Routes as Yollar,
} from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';

const App = () => {
  return (
    <Router>
      <div className="p-5 md:p-10 lg:p-15 xl:px-20">
        <Header />

        <Yollar>
          <Yol path="/" element={<MainPage />} />
          <Yol path="/detay/:id" element={<DetailPage />} />
        </Yollar>
      </div>
    </Router>
  );
};

export default App;
