import Paper from './components/funcComponent';
import Counter from './components/classComponent';
import CountPage from './components/CountPage';
import UserPage from './components/UserPage';
import { useState } from 'react';
import FilterUser from './newComps/FilterUser';
import RefExample from './newComps/RefExample';

function App() {
  const [isHide, setIsHide] = useState(true);

  return (
    <div className="App">
      <h1>Components</h1>

      <button onClick={() => setIsHide(!isHide)}>Gizle/Göster</button>

      {!isHide && <RefExample />}
    </div>
  );
}

export default App;
