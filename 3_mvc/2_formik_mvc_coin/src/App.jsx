import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginController from './controllers/LoginController';
import HeaderView from './views/HeaderView';
import MainController from './controllers/MainController';
import DetailController from './controllers/DetailController';

const App = () => {
  return (
    <BrowserRouter>
      <HeaderView />
      <Routes>
        <Route path="/" element={<LoginController />} />
        <Route path="/home" element={<MainController />} />
        <Route path="/coin/:id" element={<DetailController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
