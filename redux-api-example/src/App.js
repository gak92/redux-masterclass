import React, { useState } from 'react';
import './App.css';
import { Cart } from './features/cart/Cart';
import { Products } from './features/products/Products';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>show</button>
      {
        show ? <Cart></Cart> : <Products></Products>
      }

      {/* <Cart></Cart>
      <Products></Products> */}
    </div>
  );
}

export default App;
