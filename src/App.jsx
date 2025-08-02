import React from 'react';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div className="min-vh-100">
      <Navbar />
      <ItemListContainer bienvenida="Bienvenid@ a la nueva Tienda Online" />
    </div>
  );
};

export default App;