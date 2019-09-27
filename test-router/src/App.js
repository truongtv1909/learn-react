import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import TopMenu from './components/TopMenu';
import Products from './pages/Products';
import Cart from './pages/CartPage';
import {CartProvider} from './contexts/Cart';


function App() {
  return (
    <CartProvider>
    <Router>
    <TopMenu></TopMenu>
    <div className="container">
      <div className="App">  
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/products/" exact component={Products}></Route>
        <Route path="/cart" exact component={Cart} ></Route>
      </div>
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
