import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Slider from './components/Slider.js';



function App() {
  return (
      <div>
        <NavBar/>
        <Slider/>
        <ItemListContainer/>
      </div>
  );
}

export default App;
