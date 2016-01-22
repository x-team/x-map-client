import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../actions/AppActions';
import Header from './fragments/Header';

class App extends Component {
  render() {
    const { currentUser, actions } = this.props;

    return (
      <div className="col-md-10 col-md-push-1">
        <Header user={currentUser} onLogout={actions.logout}/>
        { this.props.children }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
