import React from 'react';
import Hero from './lib/components/Hero/Hero';
import Navigation from './lib/components/Navigation/Navigation';
import logo from './logo.svg';
import './App.css';

const App = ()=> {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <Hero/>
      <Navigation/>
    </div>
  );
}

export default App;
