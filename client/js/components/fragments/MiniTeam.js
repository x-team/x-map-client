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
      <Link className="miniTeam media" to={`/team/${team.id}`} title={team.name}>
        <span className="media-body">
          <h3 className="media-heading">{team.name}</h3>
          {summary}
        </span>
      </Link>
    );
  }
}

MiniTeam.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
};

export default MiniTeam;
