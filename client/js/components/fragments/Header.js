import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import HeaderAuthenticated from './HeaderAuthenticated';
import HeaderAnonymous from './HeaderAnonymous';

import Logo from '../../../img/logo.png';
import 'file?name=[name].[ext]!../../../img/logo.png';

class Header extends Component {
  render() {
    const { user, onLogout, onLogoutSuccess } = this.props;

    let navigation;
    if (user.id) {
      navigation = <HeaderAuthenticated user={user} onLogout={onLogout} />;
    } else {
      navigation = <HeaderAnonymous />;
    }

    return (
      <header id="header">
        <Link id="logo" to="/">
          <img className="logo" src={ Logo } alt="X-Map brand"/>
        </Link>
        <h1>X-Map</h1>
        { navigation }
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  onLogout: PropTypes.func.isRequired,
  onLogoutSuccess: PropTypes.func
}

export default Header;
