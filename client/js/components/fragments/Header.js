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

      navigation =  <ul>
        <Button className="btn btn-success pull-right" onClick={this.onLogout.bind(this)}>Logout</Button>
      </ul>;
    } else {
      // header = <HeaderAnonymous />;

      navigation =  <ul>
        <Link className="btn btn-success col-md-5" to="/login">Login</Link>
        <Link className="btn btn-success col-md-5 col-md-push-1" to="/register">Register</Link>
      </ul>;
    }

    return (
      <header id="header">
        <Link id="logo" to="/">
          <img className="logo" src={Logo} alt="X-Map brand"/>
        </Link>
        <h1>X-Map</h1>
        <nav id="navigation">
          {navigation}
        </nav>
      </header>
    );
  }
}

export default Header;
