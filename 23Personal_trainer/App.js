import React from 'react';
import './App.css';
import Customerlist from './components/Customerlist';
import Traininglist from './components/Traininglist';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigator from './components/Navigator';
import {BrowserRouter as Router ,Switch, Route, Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Navigator />
          <Switch>
            <Route path="/Traininglist" component={Traininglist}/>
            <Route exact path="/" component={Customerlist}/>
            <Route render={() => <h1>Page not found</h1>}/>
          </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;