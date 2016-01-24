import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  constructor (state) {
    super(state);
    this.state = state;
  }

  onClick () {
    this.setState({ visibility: true });
  }

  render() {
    let visibility = this.state.visibility ? 'hidden' : '';
    // to do: remove hidden class if click in the home logo
    return (
      <div className={ "panel homepage " + visibility }>
        <h2>Welcome to X-Map</h2>
        <p>Please <Link to="/login">Log in</Link> or <Link to="/register">Register</Link> to proceed.</p>
        <p>An <a href="https://github.com/x-team/x-map/" target="_blank">open source</a> project at <a href="http://x-team.com/community/" target="_blank">X-Team</a></p>
        <button onClick={ this.onClick.bind(this) }>Click to hide panel.</button>
      </div>
    );
  }
}

export default HomePage;
