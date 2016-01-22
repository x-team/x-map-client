import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class HeaderAuthenticated extends Component {
  onLogout() {
    const { onLogout } = this.props;
    onLogout();
  }

  render() {
    const { user } = this.props;
    return (
      <div className="row">
        <h3 className="col-md-10">Hello {user.email}!</h3>
        <div className="col-md-2 pull-right">
          <Button className="btn btn-success pull-right" onClick={this.onLogout.bind(this)}>Logout</Button>
        </div>
      </div>
    );
  }
}

export default HeaderAuthenticated;
