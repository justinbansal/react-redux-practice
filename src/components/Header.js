import React from "react";
import {useSelector} from 'react-redux';

// Normally would lift state up from Product component into App and then pass it into Header
// Try using Redux to access state

function Header() {
  const quantity = useSelector(state => state.quantity.value);

  return (
    <header>
      <h1>React Redux App </h1>
      <div className="cart">
        <h2>Cart</h2>
        <p>Total items in cart: {quantity}</p>
      </div>
    </header>
  )
}

export default Header;
