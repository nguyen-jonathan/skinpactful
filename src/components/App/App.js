import React from 'react';
import HomePage from '../HomePage/HomePage';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import NavigationBar from '../NavigationBar/NavigationBar';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <NavigationBar />
      <HomePage />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
