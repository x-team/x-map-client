import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

import * as TeamActions from '../../actions/TeamActions';
import * as UserActions from '../../actions/UserActions';
import assignToEmpty from '../../utils/assign';

/* Components */
import Team from '../fragments/Team';

class TeamPage extends Component {
  componentDidMount() {
    const { actions, params, teams } = this.props;
    actions.userActiveChanged(teams[params.id].users.map(user => user.id));
  }

  componentWillUpdate(props) {
    const { actions, params, teams } = props;
    actions.userActiveChanged(teams[params.id].users.map(user => user.id));
  }

  componentWillUnmount() {
    this.props.actions.userActiveChanged([]);
  }

  deleteTeam(id) {
    this.props.actions.teamDelete(id, this.redirectToTeamsPage.bind(this));
  }

  redirectToTeamsPage() {
    this.props.history.pushState(null, '/teams');
  }

  render() {
    const { teams, history, params, isAdmin } = this.props;

    const team = teams[params.id];
    if (!team) {
      history.pushState(null, '/404');
      return <span/>;
    }

    let editLink;
    let deleteButton;
    if (isAdmin) {
      editLink = (
        <Link className="btn btn-secondary btn-sm" to={`/team/${team.id}/edit`}>Edit team</Link>
      );

      deleteButton = (
        <button className="btn btn-secondary btn-sm" type="button"
          onClick={this.deleteTeam.bind(this, team.id)}>Delete</button>
      );
    }

    return (
      <DocumentTitle title={`Team: ${team.name} | X-Map`}>
        <article id="TeamPage" className="page card">
          <Link to="/" className="close btn btn-secondary">&times;</Link>

          <header className="card-header">
            <h3 className="card-title">{team.name}</h3>
            <p className="card-subtitle">Team profile</p>
            <p className="text-muted">#{team.id}</p>
            <div className="btn-group" role="group" aria-label="Actions menu">
              {editLink}{deleteButton}
            </div>
          </header>

          <div className="card-block">
            <Team team={team}/>
          </div>
        </article>
      </DocumentTitle>
    );
  }
}

TeamPage.propTypes = {
  teams: PropTypes.object.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool,
  actions: PropTypes.object
};

function mapStateToProps(state) {
  return {
    teams: state.teams,
    isAdmin: state.session.isAdmin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(assignToEmpty(TeamActions, UserActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage);
