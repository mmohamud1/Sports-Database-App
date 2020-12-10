import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';
import Sports from './pages/Sports';
import Teams from './pages/Teams';
import Players from './pages/Players';
import Footer from './components/Footer';

const App = () => {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  // Get list of all sports
  const listSports = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://www.thesportsdb.com/api/v1/json/1/all_sports.php`
      );
      //console.log(res.data.sports);
      setSports(res.data.sports);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // Search for teams by name
  const getTeams = async (input) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${input}`
      );
      //console.log(res.data.teams);
      setTeams(res.data.teams);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // Search for players by name
  const getPlayers = async (input) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${input}`
      );
      console.log(res.data.player);
      setPlayers(res.data.player);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // Clear Search
  const clearSearch = () => {
    setTeams([]);
    setPlayers([]);
    setLoading(false);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/sports'
            render={(props) => (
              <Sports
                listSports={listSports}
                sports={sports}
                loading={loading}
              />
            )}
          />
          <Route
            exact
            path='/teams'
            render={(props) => (
              <Teams
                getTeams={getTeams}
                teams={teams}
                loading={loading}
                clearSearch={clearSearch}
              />
            )}
          />
          <Route
            exact
            path='/players'
            render={(props) => (
              <Players
                getPlayers={getPlayers}
                players={players}
                loading={loading}
                clearSearch={clearSearch}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
