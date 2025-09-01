import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Footer } from './components/Footer/Footer';
import { ItemDetailsContainer } from './components/ItemDetailsContainer/ItemDetailsContainer';
import { Button as Boton } from './components/Button/Button';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-vh-100">
        <Routes>
          <Route path="/" element={<p>Bienvenido a la página principal</p>} />
          <Route path="/equipos" element={<ItemListContainer />} />
          <Route path="/equipos/:brand" element={<ItemListContainer />} />
          <Route path="/contacto" element={<p>Sección contacto</p>} />
          <Route path="/producto/:id" element={<ItemDetailsContainer />} />
        </Routes>
      </div >
      < Footer />
    </>
  );
};

export default App;