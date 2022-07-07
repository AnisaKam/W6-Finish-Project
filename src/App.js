import { useState } from 'react';
import { data } from './data';
import './App.css';
import Clothes from './Clothes';

function App() {

  const [clothes, setClothes] = useState(data);

  return (
    <div className="App">
      <Clothes itemsForSale/>
    </div>
  );
}

export default App;
