import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Switch, Route, Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigator from './Navigator';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Navigator/>
          <Switch>
            <Route exact path="/"component={Home}/>
            <Route exact path="/about"component={About}/>
            <Route path="/contact" render={() => <h1>Contact address</h1>}/>
            <Route render={() => <h1>Page not found</h1>}/>         
          </Switch>
        </div>
      </Router>
    </div>      
  );
}

export default App;
