import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Header from './Compontens/Header';
import ProductListing from './Compontens/ProductListing';
import ProductDetails from './Compontens/ProductDetails';


function App() {
  return (
    <div className="App">
       <Router>
       <Header></Header>

      <Routes>
        <Route path="/" element={<ProductListing></ProductListing>} />
        <Route path="/product/:productId" element={<ProductDetails></ProductDetails>} />
     

        
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
