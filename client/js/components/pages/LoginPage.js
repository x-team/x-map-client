import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../actions/AppActions';
import LoginForm from '../fragments/LoginForm';

class LoginPage extends Component {
  render() {
    const { actions } = this.props;

    return (
      <div>
        <h1>Login</h1>
        <LoginForm onSubmit={actions.login}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);
