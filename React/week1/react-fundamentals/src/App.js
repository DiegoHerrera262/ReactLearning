import React from 'react';
import ProductCard from './components/ProductCard';

const kiwiProps = {
  name : 'Kiwi',
  price : '500'
}

const BananaProps = {
  name : 'Banana',
  price : '300'
}

const AppleProps = {
  name : 'Apple',
  price : '700'
}

function App(){
  return(
    <div>
      <ProductCard {...kiwiProps} />
      <ProductCard {...BananaProps} />
      <ProductCard {...AppleProps} />
    </div>
  );
}

export default App;