import React, { Component, PropTypes } from 'react';
import MiniProfile from './MiniProfile';
import TeamInformations from './TeamInformations';
import TeamLinkedProfiles from './TeamLinkedProfiles';

class Team extends Component {
  render() {
    const { team } = this.props;

    return (
      <div id="Team" className="list-group">
        <TeamInformations team={team}/>
        <TeamLinkedProfiles team={team}/>
      </div>
    );
  }
}

Team.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
};

export default Team;
