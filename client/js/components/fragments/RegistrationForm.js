import React, { Component } from 'react';
import { Button, Input } from 'react-bootstrap';

class RegistrationForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      email: this.props.email || '',
      password: this.props.password || ''
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.email, this.state.password);
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return (
      <div className='col-md-4'>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className='row'>
            <Input type='text' placeholder='Email' onChange={this.onEmailChange.bind(this)} required/>
          </div>
          <div className='row'>
            <Input type='password' placeholder='Password' onChange={this.onPasswordChange.bind(this)} required/>
          </div>
          <div className='row'>
            <Button className='col-md-5 btn btn-success btn-sm' type='submit'>Register</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
