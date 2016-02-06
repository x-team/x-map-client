import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import '../../../css/components/fragments/_header.css';

import Logo from '../../../img/logo.png';
import 'file?name=[name].[ext]!../../../img/logo.png';

class Header extends Component {
  render() {
    const { user, onLogout } = this.props;

    let header = null;
    if (user && user.id) {
      header = (
        <header id="header">

          <nav className="navbar navbar-fixed-top navbar-full navbar-light bg-faded">
            <Link id="logo" className="navbar-brand" to="/">
              <img className="logo" src={Logo} alt="X-Map"/>
            </Link>

            <form className="form-inline pull-xs-left">
              <input className="form-control" type="text" placeholder="Search"/>
              <button className="btn btn-success-outline" type="submit">Search</button>
            </form>

            <ul className="nav navbar-nav pull-xs-right">
              <li className="nav-item active">
                <Link className="nav-link" to="/profiles">Profiles <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item active">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="myprofile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    My Profiile
                  </button>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="myprofile">
                    <Link className="dropdown-item" to={'/profile/' + user.id}>View my profile</Link>
                    <a className="dropdown-item" onClick={onLogout}>Logout</a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </header>
      );
    }

    return header;
  }
}

Header.propTypes = {
  user: PropTypes.object,
  onLogout: PropTypes.func.isRequired
};

export default Header;
