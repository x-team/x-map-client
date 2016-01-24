import React, { Component } from 'react';
import { Link } from 'react-router';
import HeaderAuthenticated from './HeaderAuthenticated';
import HeaderAnonymous from './HeaderAnonymous';

import Logo from '../../../img/logo.png';
import 'file?name=[name].[ext]!../../../img/logo.png';

class Header extends Component {
  render() {
    const { user, onLogout } = this.props;

    let navigation;
    if (user.id) {
      // header = <HeaderAuthenticated user={user} onLogout={onLogout}/>;

      navigation = <nav id="navigation">
        <Button className="btn btn-success pull-right" onClick={ this.onLogout.bind(this) }>Logout</Button>
      </nav>;
    } else {
      // header = <HeaderAnonymous />;

      navigation = <nav id="navigation">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>;
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

export default Header;
