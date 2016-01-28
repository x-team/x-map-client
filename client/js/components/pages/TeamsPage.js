import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TeamActions from '../../actions/TeamActions';
import { Link } from 'react-router';
import MiniTeam from '../fragments/MiniTeam';

class TeamsPage extends Component {
  render() {
    const { teams, isAdmin } = this.props;

    const teamProfiles = [];
    for (const id in teams) {
      teamProfiles.push(<MiniTeam key={id} team={teams[id]}/>);
    }

    let teamsList;
    if (teamProfiles.length) {
      teamsList = (
        <section>
          {teamProfiles}
        </section>
      );
    }

    let addLink = <span/>;
    if (isAdmin) {
      addLink = <Link to="/team/new">Add team</Link>;
    }

    return (
      <div className="panel">
        <article id="teamProfiles">
          <header>
            <h2>Teams</h2>
          </header>

          {teamsList}

          {addLink}

        </article>
      </div>
    );
  }
}

TeamsPage.propTypes = {
  teams: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool
};

TeamsPage.defaultProps = {
  isAdmin: false
};

function mapStateToProps(state) {
  return {
    teams: state.teams,
    isAdmin: state.session.isAdmin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TeamActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsPage);
