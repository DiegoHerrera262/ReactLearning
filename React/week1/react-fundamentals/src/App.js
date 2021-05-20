import React from 'react';
import ProductCard from './components/ProductCard';

function App(){
  return(
    <div>
      <ProductCard name="Kiwi" price="500"/>
      <ProductCard name="Banana" price="200"/>
      <ProductCard name="Apple" price="700"/>
    </div>
  );
}

export default App;