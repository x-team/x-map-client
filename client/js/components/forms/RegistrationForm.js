import React, { Component, PropTypes } from 'react';
import ErrorList from '../forms/ErrorList';

class RegistrationForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const { onSubmit, onSuccess } = this.props;
    onSubmit(this.state.email, this.state.password, onSuccess);
  }

  onStateChange(field, e) {
    let change = {};
    change[field] = e.target.value;

    this.setState(change);
  }

  render() {
    const { errors } = this.props;

    return (
      <div id="registrationForm">
        <h2>Register</h2>
        <ErrorList errors={ errors } showFieldErrors={ true }/>
        <ErrorList errors={ errors } />
        <form onSubmit={ this.onSubmit.bind(this) }>
          <input type="email" placeholder="Email" onChange={ this.onStateChange.bind(this, 'email') } required />
          <input type="password" placeholder="Password" onChange={ this.onStateChange.bind(this, 'password') } required />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  errors: PropTypes.object
};

export default RegistrationForm;
