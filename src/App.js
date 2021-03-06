import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="container">
      <Route path="/" exact={true} component={Home} />
      <Route path="/" exact={true} component={Staff} />
      </div>
    </div>
    </Router>
  );
}

export default App;
