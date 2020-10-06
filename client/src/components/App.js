import React, { useState } from "react";
import "./App.css";

import Navbar from './Navbar'
import Search from './Search'
import Products from './Products'
import Footer from './Footer'
function App() {
  const [productName, setProductName] = useState(undefined);
  const [leadTime, setLeadTime] = useState(undefined);
  const [weightGsm, setWeightGsm] = useState(undefined);
  const [quantity, setQuantity] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [buyerName, setBuyerName] = useState(undefined);
  const [fetchedProducts, setFetchedProducts] = useState(undefined);


  const filters = {
    productName, setProductName, leadTime, setLeadTime, weightGsm, setWeightGsm, quantity, setQuantity, price, setPrice, buyerName, setBuyerName
  }


  return (
    <div className="App">
      <Navbar />
      <Search filters={filters} setFetchedProducts={setFetchedProducts} />
      <Products fetchedProducts={fetchedProducts} />
      <Footer />
    </div>
  );
}

export default App;
