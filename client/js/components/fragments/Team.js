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

    let teamInformation = (
      <div>
        <label className="input-group">
          <h5 className="input-group-addon">Team name</h5>
          <div className="form-control">{team.name}</div>
        </label>
        <label className="input-group">
          <h5 className="input-group-addon">Summary</h5>
          <div className="form-control">{team.summary}</div>
        </label>
        <label className="input-group">
          <h5 className="input-group-addon">Description</h5>
          <div className="form-control">{team.description}</div>
        </label>
      </div>
    );

    let listOfUserProfiles;
    if (userProfiles.length) {
      listOfUserProfiles = (
        <ul className="list-group list-group-flush">
          {userProfiles}
        </ul>
      );
    }

    return (
      <div id="Team" className="list-group">
        <div id="profileInformationAccordion" className="accordion list-group-item" role="tablist" aria-multiselectable="true">
          <section id="ProfileInformation" className="panel panel-default">
            <header href="#" className="panel-heading list-group-item-heading" role="tab" id="ProfileHeading">
              <h4 className="panel-title" data-toggle="collapse" data-parent="#profileInformationAccordion" href="#ProfileCollapse"
                aria-expanded="true" aria-controls="ProfileCollapse">Informations...</h4>
            </header>

            <section id="ProfileCollapse" className="panel-collapse collapse in list-group-item-text"
              role="tabpanel" aria-labelledby="LinkedTeamsHeading">
              {teamInformation}
            </section>
          </section>
        </div>

        <div id="listOfUserProfilesAccordion" className="accordion list-group-item" role="tablist" aria-multiselectable="true">
          <section className="panel panel-default">
            <header className="panel-heading" role="tab" id="LinkedUsersHeading">
              <h4 className="panel-title" data-toggle="collapse" data-parent="#listOfUserProfilesAccordion" href="#LinkedUsersCollapse"
                aria-expanded="true" aria-controls="LinkedUsersCollapse">Linked Users...</h4>
            </header>

            <section id="LinkedUsersCollapse" className="panel-collapse collapse"
              role="tabpanel" aria-labelledby="LinkedUsersHeading">
              {listOfUserProfiles}
            </section>
          </section>
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
