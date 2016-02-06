import React, { Component, PropTypes } from 'react';
import MiniProfile from './MiniProfile';

class Team extends Component {
  render() {
    const { team } = this.props;

    const userProfiles = [];
    for (const id in team.users) {
      userProfiles.push(
        <li className="list-group-item" key={id}>
          <MiniProfile user={team.users[id]}/>
        </li>
      );
    }

    let listOfUserProfiles;
    if (userProfiles.length) {
      listOfUserProfiles = (
        <section id="LinkedUsers" className="panel panel-default">
          <header className="panel-heading" role="tab" id="LinkedUsersHeading">
            <h4 className="panel-title" data-toggle="collapse" data-parent="#accordion" href="#LinkedUsersCollapse"
              aria-expanded="true" aria-controls="LinkedUsersCollapse">Linked Users</h4>
          </header>
          <section id="LinkedUsersCollapse" className="panel-collapse collapse in"
            role="tabpanel" aria-labelledby="LinkedUsersHeading">
            <ul className="list-group list-group-flush">
              {userProfiles}
            </ul>
          </section>
        </section>
      );
    }

    return (
      <div id="Team">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{team.name}</td>
            </tr>
            <tr>
              <th>Summary</th>
              <td>{team.summary}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{team.description}</td>
            </tr>
          </tbody>
        </table>

        <div id="accordion" role="tablist" aria-multiselectable="true">
          {listOfUserProfiles}
        </div>
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
