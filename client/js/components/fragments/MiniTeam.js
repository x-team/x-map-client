import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class MiniTeam extends Component {
  render() {
    const { team } = this.props;

    let summary = null;
    if (team.summary) {
      summary = <p>{team.summary}</p>;
    }

    return (
      <span className="media">
        <span className="media-body">
          <h4 className="media-heading">{team.name}</h4>
          <Link to={`/team/${team.id}`} title={team.name}>go</Link>
          {summary}
        </span>
      </span>
    );
  }
}

MiniTeam.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
};

export default MiniTeam;
