//const React = require('react')
import React from 'react'; //es6
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';

//stateless
//function

//stateful
//class

const App = () => {
  //scoping
  //const, let, var
  // state = {

  // }
  return (
    <Router>
      <Navbar />
      <Route
        path="/"
        exact
        render={() => {
          return (
            <div>
              <p style={{fontSize: 40}}>ini localhost:3000/</p>
            </div>
          );
        }}
      />
      <Route path="/home" component={Home} />
    </Router>
  );
};

export default App; //es6
