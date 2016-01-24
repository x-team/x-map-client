import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../actions/AppActions';
import Header from './fragments/Header';
import Map from './fragments/Map';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    props.history.listen(props.actions.routeChanged);
  }

  render() {
    const { currentUser, actions } = this.props;

    return (
      <div>
        <Header user={currentUser} onLogout={actions.logout}/>
        <Map />
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
