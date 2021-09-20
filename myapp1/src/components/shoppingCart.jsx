import React from 'react';
import Product from './Product';

class ShoppingCart extends React.Component {
  render() {
    //distruct
    const { onReset, onIncrement, onDelete, products } = this.props;
    return (
      <React.Fragment>
        <h1>Sopping Cart</h1>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {products.map((product) => (
          <Product
            key={product.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            product={product}
          >
            <h1>{product.id}</h1>
          </Product>
        ))}
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
