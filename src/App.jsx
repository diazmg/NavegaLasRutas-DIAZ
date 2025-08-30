import React from 'react';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Button as Boton } from './components/Button/Button';

const App = () => {
  return ((
    <div className="min-vh-100">
      <Navbar />
      <ItemListContainer bienvenida="Bienvenid@ a la nueva Tienda Online" />
      <Boton nombre="Hacé clic aquí" />
    </div>)
  );
};

export default App;