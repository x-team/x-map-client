import React, { Component } from 'react';
import MiniTeam from './MiniTeam';

class ProfileLinkedTeams extends Component {
  render() {
    const { user } = this.props;

    let teamProfiles = [];
    for (let id in user.teams) {
      teamProfiles.push(
        <li className="list-group-item" key={id}>
          <MiniTeam team={user.teams[id]}/>
        </li>
      );
    }

    let profileLinkedTeams = (<i className="text-muted">Currently not in any team.</i>);
    if (teamProfiles.length) {
      profileLinkedTeams = (
        <ul className="list-group list-group-flush">
          {teamProfiles}
        </ul>
      );
    }

    return (
      <div id="ProfileLinkedTeams" className="accordion list-group-item" role="tablist" aria-multiselectable="true">
        <section className="panel panel-default">
          <header className="panel-heading" role="tab" id="ProfileLinkedTeamsHeading">
            <h4 className="panel-title" data-toggle="collapse" data-parent="#ProfileLinkedTeams"
              aria-expanded="true" aria-controls="ProfileLinkedTeamsCollapse"
              href="#ProfileLinkedTeamsCollapse">Linked teams...</h4>
          </header>

          <section id="ProfileLinkedTeamsCollapse" className="panel-collapse collapse"
            role="tabpanel" aria-labelledby="ProfileLinkedTeamsHeading">
            {profileLinkedTeams}
          </section>
        </section>
      </div>
    );
  }
}

export default ProfileLinkedTeams;
