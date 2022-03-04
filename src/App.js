import './App.css';
// import ProductList from './pages/ProductList';
import Home from "./components/Home";
import Products from "./components/Products";
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from "./pages/Login"
import Cart from "./pages/Cart";
import Announcement from './components/Announcement';
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import {useEffect, useState} from "react";
import {
  BrowserRouter as Router, 
  Routes, Route
} from "react-router-dom";

function App() {
  const [addItem, setAddItem] = useState(0);
  const [singleProduct,setSingleProduct] = useState({});
  const [cartItems, setCartItems] = useState([]);


  const finalItems = (product) => {
    setCartItems([...cartItems, product]);
  }

  const seeSingleProduct = (product) => {
    setSingleProduct(product);
  }

  const cartAdd = (amount = 0) => {
    amount > 0 ? setAddItem(addItem + amount): setAddItem(addItem + 1);
  }
  return (
    <div className='app'>
      <Router>
        <Announcement />
        <Navbar addItem = {addItem}/>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/home" element = {<Home />} />
          <Route path = "/carts" element = {<Cart finalProduct = {cartItems}/>} />
          <Route path = "/register" element = {<Register />} />
          <Route path = "/sign" element = {<Login />} />
          <Route path = "/products" element = {<Products addBuyingProduct = {finalItems} addProduct = {seeSingleProduct} addItemToCart = {cartAdd}/>} />
          <Route path = "/product" element = {<Product addBuyingProduct = {finalItems} product = {singleProduct} addItemToCart = {cartAdd}/>} />
        </Routes>
      </Router>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
