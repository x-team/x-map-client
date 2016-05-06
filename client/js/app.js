// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';

// Import the pages
import HomePage from './components/pages/HomePage';
import NotFoundPage from './components/pages/NotFound';
import ProfilesPage from './components/pages/ProfilesPage';
import ProfilePage from './components/pages/ProfilePage';
import ProfileEditPage from './components/pages/ProfileEditPage';
import ProfileSetLocationPage from './components/pages/ProfileSetLocationPage';
import TeamsPage from './components/pages/TeamsPage';
import TeamPage from './components/pages/TeamPage';
import TeamEditPage from './components/pages/TeamEditPage';
import TeamAddPage from './components/pages/TeamAddPage';
import App from './components/App';

// Import the CSS file, which HtmlWebpackPlugin transfers to the build folder
import '../css/main.css';

/* Assets */
import 'file?name=[name].[ext]!../img/favicon.png';

// Create store
import configureStore from './store/configureStore';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={createHistory()}>
      <Route component={App}>
        <Route path="/" component={HomePage} />
        <Route path="/profiles" component={ProfilesPage} />
        <Route path="/profile/:id" component={ProfilePage} />
        <Route path="/profile/:id/edit" component={ProfileEditPage} />
        <Route path="/profile/:id/location" component={ProfileSetLocationPage} />
        <Route path="/teams" component={TeamsPage} />
        <Route path="/team/new" component={TeamAddPage} />
        <Route path="/team/:id" component={TeamPage} />
        <Route path="/team/:id/edit" component={TeamEditPage} />
        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
