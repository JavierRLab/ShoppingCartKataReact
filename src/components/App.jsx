import { useState } from 'react';
import './App.css';
import AddProductForm from './AddProductForm';
import ShoppingCart from './ShoppingCart';

const App = () => {

  return (
    <>
      <h1>Shopping Cart</h1>
      <AddProductForm />
      <ShoppingCart />

    </>
  );
};

export default App;
