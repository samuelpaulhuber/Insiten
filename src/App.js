import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
      </header>
      <div className="main">
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
