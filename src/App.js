import './App.scss';

import { Content } from 'antd/lib/layout/layout';
import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Home';
import SignupPage from './SignupPage';
import Stories from './Stories';
import useUserLogin from './hooks/useUserLogin';
import useStories from './hooks/useStories';
import Header from './Header';

function App() {
  const { stories, addStory } = useStories();
  const { user, login, logout } = useUserLogin();

  const headerElement = <Header user={user} onLogin={login} onLogout={logout} />;

  return (
    <>
      <Router>
        <Content>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home">
              <Home header={headerElement}/>
            </Route>
            <Route exact path="/stories">
              <Stories header={headerElement} stories={stories} onAddStory={addStory} />
            </Route>
            <Route exact path="/signup">
              <SignupPage onLogin={login} />
            </Route>
          </Switch>
        </Content>
      </Router>
    </>
  );
}

export default App;
