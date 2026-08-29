import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Portfolio from './components/Portfolio';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Metrics />
      <Portfolio />
      <Philosophy />
      <Footer />
    </div>
  );
}

export default App;
