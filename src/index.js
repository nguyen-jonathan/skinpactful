import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import AboutPage from './components/AboutPage/AboutPage';
import TermsConditions from './components/TermsConditions/TermsConditions';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<AboutPage />}></Route>
        <Route path="/terms-conditions" element={<TermsConditions />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
