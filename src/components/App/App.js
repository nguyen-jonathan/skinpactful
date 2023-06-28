import React from 'react';
import HomePage from '../HomePage/HomePage';
import Footer from '../Footer/Footer';
import About from '../About/About';
import NavigationBar from '../NavigationBar/NavigationBar';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from '../HomePage/HomePage';
// import AboutPage from '../AboutPage/AboutPage';
// import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <NavigationBar />
      <HomePage />
      <About />
      <Footer />
    </div>
  );
};

export default App;
