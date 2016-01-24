import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class HeaderAuthenticated extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <nav id="navigation">
          <Link to="/profiles">Profiles</Link>
          <Link to={ '/profile/' + user.id }>My profile</Link>
          <button onClick={ this.props.onLogout.bind(this, this.props.onLogoutSuccess) }>Logout</button>
        </nav>
      </div>
    );
  }
}

HeaderAuthenticated.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string
  }).isRequired
};

export default HeaderAuthenticated;
