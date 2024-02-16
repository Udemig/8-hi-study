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
      <Header />

      <Yollar>
        <Yol path="/" element={<MainPage />} />
        <Yol path="/film/:id" element={<DetailPage />} />
      </Yollar>
    </Router>
  );
};

export default App;
