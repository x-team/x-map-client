import React, { Component } from 'react';

import Logo from '../../../img/xteam-vertical.png';
import 'file?name=[name].[ext]!../../../img/xteam-vertical.png';

class Loader extends Component {
  render() {
    return (
      <div id="loading" className="panel panel-homescreen">
        <article>
          <section>
            <h1><img className="logo" src={Logo} alt="X-Team"/></h1>
            <h2>Welcome to X-Map</h2>
            <p>An <a href="https://github.com/x-team/x-map/" target="_blank">open source</a> project at <a href="http://x-team.com/community/" target="_blank">X-Team</a></p>
            <p>Loading application data...</p>
          </section>
        </article>
      </div>
    );
  }
}

export default Loader;
