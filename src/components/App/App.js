import React from 'react';
import {BrowserRouter as Routes, Router, Route, Link} from 'react-router-dom';
import Home from '../HomePage/HomePage';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
// import './App.css';

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/appointment">Appointment</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/appointment">
              <AppointmentForm />
            </Route>
          </Routes>
        </div>
      </Router>
      {/* <h1>Appointment Form</h1>
      <AppointmentForm /> */}
    </div>
  );
}

export default App;
