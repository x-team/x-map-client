import React, { Component } from 'react';
import { Link } from 'react-router';

class HeaderAnonymous extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <nav className="navigation">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </div>
    );
  }
}

export default HeaderAnonymous;
