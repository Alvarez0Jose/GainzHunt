import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GymList from './GymList';

function Main() {
  return (
    <Switch>
      <Route path="/search">
        <GymList />
      </Route>
      {/* Add other routes as needed */}
    </Switch>
  );
}

export default Main;
