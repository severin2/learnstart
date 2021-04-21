import './App.scss';

import { Content } from 'antd/lib/layout/layout';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Home from './Home';
import SignupPage from './SignupPage';
import Stories from './Stories';

function App() {
  return (
    <>
      <Router>
        <Content>
          <Switch>
            <Redirect exact from="/" to="/home" />;
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/stories">
              <Stories />
            </Route>
            <Route exact path="/signup">
              <SignupPage />
            </Route>
          </Switch>
        </Content>
      </Router>
    </>
  );
}

export default App;
