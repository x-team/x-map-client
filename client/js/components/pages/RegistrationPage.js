import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from '../../actions/UserActions';
import RegistrationForm from '../fragments/RegistrationForm';

class RegistrationPage extends Component {
  redirectToHomepage() {
    this.props.history.pushState(null, '/login');
  }

  render() {
    const { actions } = this.props;

    return (
      <div>
        <h1>Register</h1>
        <RegistrationForm onSubmit={actions.userCreate} onSuccess={this.redirectToHomepage.bind(this)}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(RegistrationPage);
