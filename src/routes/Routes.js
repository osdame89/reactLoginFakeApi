import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Menu from '../pages/Menu';

function Routes() {
  return (
    <BrowserRouter>
      <Watch>
        <Route exact path="/" component={Login}/>
        <Route exact path="Menu" component={Menu}/>
      </Watch>
    </BrowserRouter>
  );
}

export default Routes;
