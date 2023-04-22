import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element= {<ItemListContainer/>}/>
            <Route path='/category/:category' element= {<ItemListContainer/>}/>
            <Route path='/product/:id' element= {<ItemDetailContainer/>}/>

          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

