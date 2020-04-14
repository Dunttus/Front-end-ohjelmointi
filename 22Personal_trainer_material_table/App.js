import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Customerlist from './components/Customerlist';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
         <Typography variant="h5">
           Personal trainer
          </Typography>
        </Toolbar>
      </AppBar>
      <Customerlist />
    </div>
  );
}

export default App;