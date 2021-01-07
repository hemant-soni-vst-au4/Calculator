import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main/Main';
import App from './App/App';
import Quote from './Quote/Quote';
import Navabr from './Navbar';

export default function Routes() {
  return (
    <BrowserRouter>
    <Navabr />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/calcy" component={App} />
        <Route path="/quote" component={Quote} />
      </Switch>
    </BrowserRouter>
  );
}
