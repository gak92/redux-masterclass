import React from 'react';
import './App.css';
import { Cart } from './features/cart/Cart';
import { Products } from './features/products/Products';

function App() {
  return (
    <div className="App">
      <Cart></Cart>
      <Products></Products>
    </div>
  );
}

export default App;
