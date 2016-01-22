import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/UserActions'
import * as AppActions from '../actions/AppActions'
import { connect } from 'react-redux';
import assignToEmpty from '../utils/assign';
import Header from './fragments/Header';

class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="col-md-10 col-md-push-1">
        <Header user={user}/>
        { this.props.children }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(assignToEmpty(AppActions, UserActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
