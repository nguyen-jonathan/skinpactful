import React from 'react';
import HomePage from '../HomePage/HomePage';
import About from '../About/About';
import Navigation from '../NavigationBar/NavigationBar';
// import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navigation />

      <HomePage />
      <About />
    </div>
  );
};

export default App;
