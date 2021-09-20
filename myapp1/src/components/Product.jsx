import React from 'react';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  //state = {
  //name: this.props.product.name,
  //count: this.props.product.count,
  //};
  getClasses() {
    return this.props.product.count === 0
      ? 'badge alert-warning m-2'
      : 'badge alert-primary m-2';
  }

  render() {
    //const styles = { color: 'red' };
    return (
      <div className="row">
        <div className="col-2">
          {/* {this.props.children} */}
          <span>
            <Link to={`productDetails/${this.props.product.id}`}>
              {this.props.product.name}
            </Link>
          </span>
        </div>
        <div className="col">
          <span className={this.getClasses()}>{this.props.product.count}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.product)}
            className="btn btn-primary btn-sm"
          >
            +
          </button>
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => this.props.onDelete(this.props.product)}
          >
            <i className="fas fa-trash m-2"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default Product;
