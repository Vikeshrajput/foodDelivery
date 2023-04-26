import { useState } from 'react';

import CartProvider from './store/CartProvider';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [show, setShow] = useState(false);
  const showModalHandler = () => {
    setShow(true);
  };
  const hideModalHandler = () => {
    setShow(false);
  };
  return (
    <CartProvider>
      {show && <Cart onShowCart={showModalHandler} onCloseCart={hideModalHandler} />}
      <Header onShowCart={showModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
