import './styles/styles.scss';
/* The following line can be included in your src/index.js or App.js file */

import React from 'react';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import { Header } from './componentes/header/Header';
import { Footer } from './componentes/footer/Footer';
import { Productos } from './componentes/productos/Productos';
import { Home } from './componentes/home/Home';
import { Contacto } from './componentes/contacto/Contacto';
import { MuestreoVerMas } from './componentes/productos/MuestreoVerMas';
import { BtnWsp } from './componentes/wsp/BtnWsp';
import { CartProvider } from './componentes/productos/CartContext';
import { Cart } from './componentes/productos/Cart';


function App() {
  return (
    <CartProvider>
      <HashRouter>

        <Header />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/productos' element={<Productos />}></Route>
          <Route path='/productos/:catId' element={<Productos />}></Route>
          <Route path='/detail/:itemId' element={<MuestreoVerMas />}></Route>
          <Route path='/contacto' element={<Contacto />}></Route>
          <Route path='*' element={<Navigate to={'/'} />}></Route>
          <Route path='/cart' element={<Cart/>}></Route>

        </Routes>
        
        <BtnWsp />
        <Footer />

      </HashRouter>
    </CartProvider>

  );
}

export default App;


// <Route path='/nosotros' element={<Nosotros />}></Route>          

//<Route path='/detail/:itemId' element={<Details/>}></Route>