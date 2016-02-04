import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getGoogleApiClient from 'google-client-api';
import * as AppActions from '../actions/AppActions';
import * as UserActions from '../actions/UserActions';
import * as TeamActions from '../actions/TeamActions';
import assignToEmpty from '../utils/assign';
import Header from './fragments/Header';
import Loader from './fragments/Loader';
import Map from './fragments/Map';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    props.history.listen(props.actions.routeChanged);
  }

  componentDidMount() {
    getGoogleApiClient(gapi => {
      gapi.load('auth2', () => {
        gapi.auth2.init(process.env.GOOGLE_SETTINGS);

        const { actions } = this.props;
        actions.authenticate(() => {
          actions.userList();
          actions.teamList();
        }, this.redirectToHomePage.bind(this));
      });
    });
  }

  redirectToHomePage() {
    this.props.history.push('/');
  }

  redirectToProfilePage(id) {
    this.props.history.push('/profile/' + id);
  }

  render() {
    const { currentUserId, isSignedIn, usersLoaded, teamsLoaded, users, actions } = this.props;

    let content;
    if (currentUserId && usersLoaded && teamsLoaded) {
      content = (
        <span>
          <Header user={users[currentUserId]} onLogout={actions.logout.bind(null, this.redirectToHomePage.bind(this))}/>
          { this.props.children }
        </span>
      );
    } else {
      content = <Loader isSignedIn={isSignedIn}/>;
    }

    return (
      <div>
        {content}
        <Map onFeatureClick={this.redirectToProfilePage.bind(this)}/>
      </div>
    );
  }
}

App.propTypes = {
  currentUserId: PropTypes.string,
  isSignedIn: PropTypes.bool,
  usersLoaded: PropTypes.bool,
  teamsLoaded: PropTypes.bool,
  actions: PropTypes.object,
  users: PropTypes.object,
  history: PropTypes.object.isRequired,
  children: PropTypes.object
};

App.defaultProps = {
  isSignedIn: false,
  usersLoaded: false,
  teamsLoaded: false,
  users: {}
};

function mapStateToProps(state) {
  return {
    currentUserId: state.session.currentUserId,
    isSignedIn: state.session.isSignedIn,
    usersLoaded: state.session.usersLoaded,
    teamsLoaded: state.session.teamsLoaded,
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(assignToEmpty(AppActions, UserActions, TeamActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
