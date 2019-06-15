import React from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home'
function App() {
  return (
    <div className="max-container">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>      
          Target Tracker
        </Navbar.Brand>
      </Navbar>
      <main>
      <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </main>
    </div>
  );
}
export default App