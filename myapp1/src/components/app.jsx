import React from 'react';
import Navbar from './navbar';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from "axios";
import About from './about';
import Contact from './contact';
import Home from './home';
import ShoppingCart from './shoppingCart';
import ProductDetails from './productDetails';
import NotFound from './notFound';
import Menu from './menu';
import Login from './login';

class App extends React.Component {
  state = {
    products: [
      { id: 1, name: 'cola', count: 0, price: 40, isInCart: false },
      { id: 2, name: 'pizza', count: 0, price: 100, isInCart: false },
      { id: 3, name: 'fries', count: 0, price: 88, isInCart: false },
    ],
  };
//   componentDidMount(){
//     const promise=fetch("https://jsonplaceholder.typicode.com/posts");
//     const res=promise.then(res=>res.json());
//     res.then(data=>console.log(data));
// }
 async componentDidMount(){
   const {data}=await axios.get("https://jsonplaceholder.typicode.com/posts");
   console.log(data);
}
  handleDelete = (product) => {
    const newProducts = this.state.products.filter((p) => p.id != product.id);
    this.setState({ products: newProducts });
  };
  handleIncrement = (product) => {
    let products = [...this.state.products];
    let indx = products.indexOf(product);
    //products[indx] = { ...products[indx] }; clone object
    products[indx].count++;
    this.setState({ products });
  };
  handleReset = () => {
    let products = [...this.state.products];
    products = products.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState({ products });
  };

  handleInCart = (product) => {
    let products = [...this.state.products];
    let indx = products.indexOf(product);
    products[indx].isInCart = !products[indx].isInCart;
    this.setState({ products });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          productsCount={this.state.products.filter((p) => p.isInCart).length}
        />
        <main className="container">
          <Switch>
            <Route
              path="/productDetails/:id"
              render={(props) => (
                <ProductDetails products={this.state.products} {...props} />
              )}
            />
            <Route
              path="/cart"
              render={(props) => (
                <ShoppingCart
                  products={this.state.products.filter((p) => p.isInCart)}
                  onDelete={this.handleInCart}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  {...props}
                />
              )}
            />
            <Route
              path="/menu"
              render={(props) => (
                <Menu
                  {...props}
                  products={this.state.products}
                  onCartClick={this.handleInCart}
                />
              )}
            />
            <Route path="/login" component={Login} />
            <Route path="/notFound" component={NotFound} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/home" component={Home} />
            <Redirect from="/Home" to="/home" />
            <Redirect to="/notFound" />
          </Switch>
          {/* <ShoppingCart
            products={this.state.products}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
          />  */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
