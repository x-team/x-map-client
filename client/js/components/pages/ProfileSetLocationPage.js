import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as UserActions from '../../actions/UserActions';
import DocumentTitle from 'react-document-title';

class ProfileSetLocationPage extends Component {
  componentDidMount() {
    const user = this.props.users[this.props.params.id];
    this.props.actions.userUpdatesLocation(user.lat, user.lng);
  }

  componentWillUnmount() {
    this.props.actions.userUpdatedLocation();
  }

  redirectToProfilePage(id) {
    this.props.history.push('/profile/' + id);
  }

  save() {
    const { actions, currentLocation, params } = this.props;

    const changeset = {
      id: params.id,
      lat: currentLocation.lat,
      lng: currentLocation.lng
    };

    actions.userUpdate(changeset, this.redirectToProfilePage.bind(this, params.id));
  }

  render() {
    const { users, params, history, currentLocation } = this.props;

    const user = users[params.id];
    if (!user) {
      history.pushState(null, '/404');
      return <span/>;
    }

    return (
      <DocumentTitle title={`Set location: ${user.firstName} ${user.lastName} | X-Map`}>
        <article id="ProfileSetLocationPage" className="panel card">
          <header className="card-block">
            <h4 className="card-title">{user.firstName} {user.lastName}</h4>
            <p className="card-subtitle">Click in the map to select current location.</p>
            <p className="text-muted">#{user.id}</p>
          </header>

          <section>
            <nav>
              <button className="card-link" type="button" disabled={!currentLocation} onClick={this.save.bind(this)}>Save</button>
              <Link className="card-link" to={`/profile/${params.id}`}>Cancel</Link>
            </nav>
          </section>
        </article>
      </DocumentTitle>
    );
  }
}

ProfileSetLocationPage.propTypes = {
  users: PropTypes.object.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.object.isRequired,
  actions: PropTypes.object,
  currentLocation: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  })
};

function mapStateToProps(state) {
  return {
    users: state.users,
    currentLocation: state.session.currentLocation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSetLocationPage);
