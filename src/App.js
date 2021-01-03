import React, { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import ReactGa from 'react-ga'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import One from './components/One'
import Two from './components/Two'

function App() {
  useEffect(() => {
    ReactGa.initialize('UAA-153278956-1')

    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <a href="/one">One</a>
          <be />
          <a href="/two">Two</a>
          <be />
          <Switch>
            <Route path="/one"><One /></Route>
            <Route path="/two"><Two /></Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
