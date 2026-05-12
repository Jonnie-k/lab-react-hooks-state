import React from 'react'

const Cart = () => {
const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} is in your cart.
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Cart;