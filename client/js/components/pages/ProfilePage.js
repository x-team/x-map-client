import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from '../../actions/UserActions';
import { Link } from 'react-router';
import Profile from '../fragments/Profile';
import DocumentTitle from 'react-document-title';

class ProfilePage extends Component {
  componentDidMount() {
    this.props.actions.userActiveChanged([this.props.params.id]);
  }

  componentWillUpdate(props) {
    props.actions.userActiveChanged([props.params.id]);
  }

  componentWillUnmount() {
    this.props.actions.userActiveChanged([]);
  }

  render() {
    const { users, history, params, currentUserId, isAdmin, actions } = this.props;

    const user = users[params.id];
    if (!user) {
      history.pushState(null, '/404');
      return <span/>;
    }

    let editLink;
    let setLocationLink;
    if (isAdmin || user.id === currentUserId) {
      editLink = <Link className="card-link" to={`/profile/${user.id}/edit`}>Edit profile</Link>;
      setLocationLink = <Link className="card-link" to={`/profile/${user.id}/location`}>Set location</Link>;
    }

    let adminLink = <span/>;
    if (isAdmin && user.id !== currentUserId) {
      const grantRevokeText = user.isAdmin ? 'Revoke admin' : 'Grant admin';
      const grantRevokeAction = user.isAdmin ? actions.userRevokeAdmin.bind(null, user.id) : actions.userGrantAdmin.bind(null, user.id);
      adminLink = <a className="card-link" onClick={grantRevokeAction}>{grantRevokeText}</a>;
    }

    return (
      <DocumentTitle title={`Profile: ${user.firstName} ${user.lastName} | X-Map`}>
        <article id="ProfilePage" className="panel card">
          <header className="card-block">
            <h4 className="card-title">{user.firstName} {user.lastName}</h4>
            <p className="card-subtitle">Profile page</p>
            <p className="text-muted">#{user.id}</p>
            <nav>
              {editLink} {setLocationLink} {adminLink}
            </nav>
          </header>

          <section>
            <Profile user={user}/>
          </section>
        </article>
      </DocumentTitle>
    );
  }
}

ProfilePage.propTypes = {
  users: PropTypes.object.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.object.isRequired,
  currentUserId: PropTypes.string,
  isAdmin: PropTypes.bool,
  actions: PropTypes.object
};

function mapStateToProps(state) {
  return {
    users: state.users,
    currentUserId: state.session.currentUserId,
    isAdmin: state.session.isAdmin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
