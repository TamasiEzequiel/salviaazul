import './styles/styles.scss';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './componentes/header/Header';
import { Footer } from './componentes/footer/Footer';
import { Productos } from './componentes/productos/Productos';
import { Home } from './componentes/home/Home';
import { Nosotros } from './componentes/nosotros/Nosotros';
import { Contacto } from './componentes/contacto/Contacto';


function App() {
  return (

    <BrowserRouter>

      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/productos' element={<Productos />}></Route>
        <Route path='/productos/:catId' element={<Productos />}></Route>
        <Route path='/nosotros' element={<Nosotros />}></Route>  
        <Route path='/contacto' element={<Contacto/>}></Route>
        <Route path='*' element={<Navigate to={'/'} />}></Route>
        
      </Routes>

      <Footer />

    </BrowserRouter>

  );
}

export default App;
