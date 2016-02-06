import React, { Component, PropTypes } from 'react';
import MiniTeam from './MiniTeam';

class Profile extends Component {
  render() {
    const { user } = this.props;

    const teamProfiles = [];
    for (const id in user.teams) {
      teamProfiles.push(
        <li className="list-group-item" key={id}>
          <MiniTeam team={user.teams[id]}/>
        </li>
      );
    }

    let listOfTeamProfiles;
    if (teamProfiles.length) {
      listOfTeamProfiles = (
        <section id="LinkedTeams" className="panel panel-default">
          <header className="panel-heading" role="tab" id="LinkedTeamsHeading">
            <h4 className="panel-title" data-toggle="collapse" data-parent="#accordion" href="#LinkedTeamsCollapse"
              aria-expanded="true" aria-controls="LinkedTeamsCollapse">Linked teams</h4>
          </header>
          <section id="LinkedTeamsCollapse" className="panel-collapse collapse in"
            role="tabpanel" aria-labelledby="LinkedTeamsHeading">
            <ul className="list-group list-group-flush">
              {teamProfiles}
            </ul>
          </section>
        </section>
      );
    }

    return (
      <div id="Profile">
        <table>
          <tbody>
          <tr>
            <th>Email</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th>First name</th>
            <td>{user.firstName}</td>
          </tr>
          <tr>
            <th>Last name</th>
            <td>{user.lastName}</td>
          </tr>
          <tr>
            <th>Skype ID</th>
            <td>{user.skypeId}</td>
          </tr>
          <tr>
            <th>Slack ID</th>
            <td>{user.slackId}</td>
          </tr>
          <tr>
            <th>Website</th>
            <td>{user.website}</td>
          </tr>
          <tr>
            <th>Nationality</th>
            <td>{user.nationality}</td>
          </tr>
          <tr>
            <th>About me</th>
            <td>{user.aboutMe}</td>
          </tr>
          <tr>
            <th>Is admin</th>
            <td>{user.isAdmin ? 'Y' : 'N'}</td>
          </tr>
          </tbody>
        </table>

        <div id="accordion" role="tablist" aria-multiselectable="true">
          {listOfTeamProfiles}
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
};

export default Profile;
