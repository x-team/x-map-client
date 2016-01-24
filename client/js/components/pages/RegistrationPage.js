import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from '../../actions/UserActions';
import RegistrationForm from '../forms/RegistrationForm';

class RegistrationPage extends Component {
  redirectToLoginPage() {
    this.props.history.pushState(null, '/login');
  }

  render() {
    const { actions, errors } = this.props;

    return (
      <div className="panel">
        <h2>Register</h2>
        <RegistrationForm onSubmit={actions.userCreate} onSuccess={this.redirectToLoginPage.bind(this)} errors={errors}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors.userCreate
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
