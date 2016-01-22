import React, { Component } from 'react';
import { Link } from 'react-router';
import HeaderAuthenticated from './HeaderAuthenticated';
import HeaderAnonymous from './HeaderAnonymous';
import Logo from '../../../img/logo.png';

class Header extends Component {
  render() {
    const { user, onLogout } = this.props;

    var header;
    if (user.id) {
      header = <HeaderAuthenticated user={user} onLogout={onLogout}/>;
    } else {
      header = <HeaderAnonymous />;
    }

    return (
      <div id="header" className="row">
        <div className="col-md-1">
          <Link to="/">
            <img className="logo" src={Logo}/>
          </Link>
        </div>
        <div className="col-md-11">
          {header}
        </div>
      </div>
    );
  }
}

export default Header;
