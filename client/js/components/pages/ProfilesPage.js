import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

import * as UserActions from '../../actions/UserActions';

/* Components */
import MiniProfile from '../fragments/MiniProfile';

class ProfilesPage extends Component {
  markUserAsActive(id) {
    this.props.actions.userActiveChanged([id]);
  }

  markUserAsInactive() {
    this.props.actions.userActiveChanged([]);
  }

  render() {
    const { users } = this.props;

    const profiles = [];
    for (const id in users) {
      profiles.push(
        <li className="list-group-item" key={id}
          onMouseOver={this.markUserAsActive.bind(this, id)} onMouseOut={this.markUserAsInactive.bind(this)}>
          <MiniProfile user={users[id]}/>
        </li>
      );
    }

    if (!profiles.length) {
      profiles.push(<p className="alert error">Something has gone wrong. No profiles found.</p>);
    }

    return (
      <DocumentTitle title="Profiles | X-Map">
        <article id="ProfilesPage" className="page card">
          <Link to="/" className="close btn btn-secondary">&times;</Link>

          <header className="card-header">
            <h3 className="card-title">Profiles</h3>
            <p className="text-muted">Listing all profiles</p>
          </header>

          <ul className="list-group list-group-flush">
            {profiles}
          </ul>
        </article>
      </DocumentTitle>
    );
  }
}

ProfilesPage.propTypes = {
  users: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilesPage);
