import React from 'react';
import Customerlist from './components/Customerlist';
import Traininglist from './components/Traininglist';
import Navigator from './components/Navigator';
import {BrowserRouter as Router ,Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Navigator />
          <Switch>
            <Route exact path="/" component={Customerlist}/>
            <Route path="/Traininglist" component={Traininglist}/>
            <Route render={() => <h1>Page not found</h1>}/>
          </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;