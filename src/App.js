//const React = require('react')
import React from 'react'; //es6
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import StoreList from './Components/StoreList';
import store from './Publics/Redux/store';

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
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route
          path="/"
          exact
          render={props => {
            return <Redirect to="/store" {...props} />;
          }}
        />
        <Route path="/home" component={Home} />
        <Route path="/store" component={StoreList} />
      </Router>
    </Provider>
  );
};

export default App; //es6
