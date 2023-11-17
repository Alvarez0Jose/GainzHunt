import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GymList from './components/GymList';

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {/* Add other routes as needed */}
            <Route path="/search">
              <GymList />
            </Route>
            {/* Add a default route or a 404 page */}
            <Route path="/">
              <div>Home Page</div>
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
