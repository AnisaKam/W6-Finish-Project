/* 2. удаляем, когда создаем панель меню, все переносим в Home.js:
import { useState } from 'react';
import { data } from './data';
import './App.css';
import Clothes from './Clothes';
import Buttons from './Buttons';
и прописываем ниже:*/

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; /* 3.также нужно написать команду в терминале для установки (react-router-dom) - npm install react-router-dom*/ 

import Home from './Home';
import './App.css';
import Contact from './Contact';
import About from './About';


/* 1.весь код (логику) переносим в другой компонент - Home.js:

function App() {

  const [clothes, setClothes] = useState(data);

  const chosenClothes = (searchTerm) => {
    const newClothes = data.filter(element => element.searchTerm === searchTerm);
    setClothes(newClothes);
  } 

  return (
    <div className="App">
      <div className='container'>
        <h2 className='item'> Free shipping for you</h2>
      </div>
      <Buttons filteredClothes={chosenClothes}/>
      <Clothes itemsForSale={clothes}/>
    </div>
  );
}

*/

function App() {
  return (
    <Router>
      <nav>
        <Link to='/' className='link'>Home</Link>
        <Link to='/about' className='link'>About us</Link>
        <Link to='/contact' className='link'>Contact</Link>
      </nav>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </Router>

  )
}


export default App;
