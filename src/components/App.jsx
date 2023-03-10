import { useState, useEffect } from 'react';
import './App.css';
import AddProductForm from './AddProductForm';
import ShoppingCart from './ShoppingCart';
import { getShoppingCart } from "../services/ShoppingCartAPIService";

const App = () => {

  const [shoppingCart, setShoppingCart] = useState({});

  useEffect(() => {
    getShoppingCart()
      .then(shoppingCart => setShoppingCart(shoppingCart))
  }, [])

  function handleOnAddProduct() {
    getShoppingCart()
      .then(shoppingCart => setShoppingCart(shoppingCart))
  }
  return (
    <>
      <h1>Shopping Cart</h1>
      <AddProductForm onAddProduct={handleOnAddProduct} />
      <ShoppingCart shoppingCart={shoppingCart} />

    </>
  );
};

export default App;
