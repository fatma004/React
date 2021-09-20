import React from 'react';
const Cart = (props) => {
  const style = !props.product.isInCart
    ? { color: 'gray', cursor: 'pointer' }
    : { cursor: 'pointer' };
  return (
    <i
      style={style}
      onClick={() => props.onCartClick(props.product)}
      className="fas fa-cart-plus"
    ></i>
  );
};

export default Cart;
