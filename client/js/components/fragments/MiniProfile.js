import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import DefaultAvatar from '../../../img/avatar.jpg';
import 'file?name=[name].[ext]!../../../img/avatar.jpg';

class MiniProfile extends Component {
  render() {
    const { user } = this.props;

    let fullName;
    if (user.firstName && user.lastName) {
      fullName = `${user.firstName} ${user.lastName} (${user.email})`;
    } else if (!user.firstName && user.lastName) {
      fullName = `${user.lastName} (${user.email})`;
    } else if (user.firstName && !user.lastName) {
      fullName = `${user.firstName} (${user.email})`;
    } else {
      fullName = user.email;
    }

    let avatar;
    if (user.avatar) {
      avatar = user.avatar;
    } else {
      avatar = DefaultAvatar;
    }

    return (
      <span>
        <Link to={`/profile/${user.id}`} title={fullName}><img src={avatar} alt={fullName}/></Link>
      </span>
    );
  }
}

MiniProfile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
};

export default MiniProfile;
