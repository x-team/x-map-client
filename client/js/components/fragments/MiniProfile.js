import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class MiniProfile extends Component {
  render() {
    const { user } = this.props;

    let avatar = null;
    if (user.avatar) {
      avatar = (
        <img className="media-object img-circle" src={user.avatar} alt={`${user.firstName} ${user.lastName}`}/>
      );
    }

    let name = (
      <a className="text-muted" href={`mailto:${user.email}`} target="_blank">{user.email}</a>
    );
    if (user.slackId) {
      name = (
        <a className="text-muted" href={`slack:${user.slackId}`} target="_blank">Slack: @{user.slackId}</a>
      );
    }

    return (
      <div className="miniProfile media">
        <Link className="media-left" to={`/profile/${user.id}`} title={`${user.firstName} ${user.lastName}`}>
          {avatar}
        </Link>
        <span className="media-body">
          <Link to={`/profile/${user.id}`} title={`${user.firstName} ${user.lastName}`}>
            <h4 className="media-heading">{user.firstName} {user.lastName}</h4>
          </Link>
          {name}
        </span>
      </div>
    );
  }
}

MiniProfile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
};

export default MiniProfile;
