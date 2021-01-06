import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main';
import App from './App';
import Quote from './Quote';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/calcy" component={App} />
        <Route path="/quote" component={Quote} />
      </Switch>
    </BrowserRouter>
  );
}
