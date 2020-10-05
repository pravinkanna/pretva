import React from "react";
import "./App.css";

import Navbar from './Navbar'
import Search from './Search'
import Filters from './Filters'
import Products from './Products'
import Footer from './Footer'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Filters />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
