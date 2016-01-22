import React, { Component, PropTypes   } from 'react';
import { Link } from 'react-router';
import HeaderAuthenticated from './HeaderAuthenticated';
import HeaderAnonymous from './HeaderAnonymous';
import Logo from '../../../img/logo.png';

class Header extends Component {
  render() {
    const { user } = this.props;

    var header;
    if (user) {
      header = <HeaderAuthenticated user={user}/>;
    } else {
      header = <HeaderAnonymous />;
    }

    return (
      <div id="header" className="row">
        <div className="col-md-1">
          <img className="logo" src={Logo}/>
        </div>
        <div className="col-md-11">
          {header}
        </div>
      </div>
    );
  }
}

export default Header;
