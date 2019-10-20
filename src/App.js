import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
// Fixed 
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Fixed  добавил history и Main
import history from './history';
import Main from './pages/main'
import Login from './pages/login';

const App = () => (
  <Router history={history}>
    <>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" component={Main} />
      </Switch>
    </>
  </Router>
);

export default App;
