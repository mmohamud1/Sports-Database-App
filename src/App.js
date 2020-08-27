import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </Router>  
  );
}

export default App;