import React from 'react';

const ItemListContainer = ({ bienvenida }) => {
  return (
    <div>
      <h1 className="display-4">
        {bienvenida}
      </h1>
      <p className="lead">
        Próximamente, el catálogo de productos aparecerá aquí.
      </p>
    </div>
  );
};

export default ItemListContainer;