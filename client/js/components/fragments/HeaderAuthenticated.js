import React, { Component, PropTypes   } from 'react';
import { Button } from 'react-bootstrap';

class HeaderAuthenticated extends Component {
  onLogout() {
    const { actions } = this.props;
    actions.logout();
  }

  render() {
    const { user } = this.props;
    return (
      <div className="row">
        <h3>Hello {user.email}!</h3>
        <Button onClick={onLogout}>Logout</Button>
      </div>
    );
  }
}

export default HeaderAuthenticated;
