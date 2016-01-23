import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../actions/AppActions';
import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {
  redirectToHomePage() {
    this.props.history.pushState(null, '/');
  }

  render() {
    const { actions, errors } = this.props;

    return (
      <div>
        <h1>Login</h1>
        <LoginForm onSubmit={actions.login} onSuccess={this.redirectToHomePage.bind(this)} errors={errors}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors.appLogin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
