import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './compondents/Product';

function App() {
  return (
    <div className="App">
            
     <Product imag='https://m.media-amazon.com/images/I/61nF5ekaaPL._SS460_.jpg' 
     heading='Blue Star 1 Ton 3 Star Convertible 
     5 in 1 Cooling Inverter Split AC (Copper, Multi 
     Sensors, Dust Filters, Smart Ready, Blue Fins, 
     Self Diagnosis, 2023Model, IC312YNU,White)' pric={2300} butnn='Add to cart'/>
    </div>
  );
}

export default App;
