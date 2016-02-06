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
        <section>
          <h3>Linked users:</h3>
          <ul className="list-group list-group-flush">
            {userProfiles}
          </ul>
        </section>
      );
    }

    return (
      <section>
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

        {listOfUserProfiles}

      </section>
    );
  }
}

Team.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
};

export default Team;
