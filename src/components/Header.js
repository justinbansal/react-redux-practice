import React from "react";
import {useSelector} from 'react-redux';

// Normally would lift state up from Product component into App and then pass it into Header
// Try using Redux to access state

function Header() {
  const quantity = useSelector(state => state.quantity.cartQuantity);
  const cartItems = useSelector(state => state.quantity.cartItems);

  const cartItemsList = cartItems.map(item => {
    return (
      <div className="item">
        <p>{item.name} - {item.quantity}</p>
      </div>
    )
  })

  return (
    <header>
      <h1>React Redux App </h1>
      <div className="cart">
        <h2>Cart</h2>
        <p>Total items in cart: {quantity}</p>
      </div>
      <div className="cart-items">
        {cartItemsList}
      </div>
    </header>
  )
}

export default Header;
