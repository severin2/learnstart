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
import StoriesPage from './Stories/StoriesPage';
import useUserLogin from './hooks/useUserLogin';
import useStories from './hooks/useStories';
import Header from './Header';
import SignupPage from './Signup/SignupPage';
import StoryFormPage from './Stories/StoryFormPage';

function App() {

  /**
   * Two intances of the same story hook provide the add/remove logic consistently
   */
  const {
    stories: featuredStories,
    addStory: addFeaturedStory,
    removeStory: removeFeaturedStory,
  } = useStories();
  const {
    stories: latestStories,
    addStory: addLatestStory,
    removeStory: removeLatestStory,
  } = useStories();

  const { user, login, logout } = useUserLogin();

  /**
   * passing the same header element to every page that needs one
   * only the full-page forms don't use it (IE sign up, add story)
   */
  const headerElement = (
    <Header user={user} onLogin={login} onLogout={logout} />
  );

  return (
    <>
      <Router>
        <Content>
          <Switch>
            {/* default to home page */}
            <Redirect exact from="/" to="/home" />
            {/* the landing page, accessible by clicking the top-left logo */}
            <Route exact path="/home">
              <Home header={headerElement} />
            </Route>
            <Route exact path="/stories">
              <StoriesPage
                header={headerElement}
                user={user}
                latestStories={latestStories}
                onAddLatestStory={addLatestStory}
                onRemoveLatestStory={removeLatestStory}
                featuredStories={featuredStories}
                onAddFeaturedStory={addFeaturedStory}
                onRemoveFeaturedStory={removeFeaturedStory}
              />
            </Route>
            <Route exact path="/add-story">
              <StoryFormPage user={user} onAddStory={addLatestStory}/>
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
