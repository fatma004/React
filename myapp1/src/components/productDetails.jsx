import React from 'react';
import qs from 'query-string';

class ProductDetails extends React.Component {
  handleSave = () => {
    this.props.history.push('/cart');
  };
  render() {
    const res = qs.parse(this.props.location.search);
    console.log(res);
    const product = this.props.products.filter(
      (c) => c.id === parseInt(this.props.match.params.id)
    )[0];
    console.log(product);
    return (
      <React.Fragment>
        <h1>Details No.{this.props.match.params.id}</h1>
        <h2>Product Name: {product.name}</h2>
        <h2>Count in Shopping Cart : {product.count}</h2>
        <button className="btn btn-primary btn-sm" onClick={this.handleSave}>
          save
        </button>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
