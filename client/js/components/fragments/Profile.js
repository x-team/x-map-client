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

    let profileInformation = (
      <div>
        <label className="input-group">
          <h5 className="input-group-addon">First name</h5>
          <div className="form-control">{user.firstName}</div>
        </label>
        <label className="input-group">
          <h5 className="input-group-addon">Last Name</h5>
          <div className="form-control">{user.lastName}</div>
        </label>
        <label className="input-group">
          <h5 className="input-group-addon">Email</h5>
          <div className="form-control">{user.email}</div>
        </label>
        <label className="input-group">
          <h5 className="input-group-addon">Skype ID</h5>
          <div className="form-control">{user.skypeId}</div>
        </label>
        <label className="input-group">
          <h5 className="input-group-addon">Slack ID</h5>
          <div className="form-control">{user.slackId}</div>
        </label>
        <label className="input-group">
          <h5 className="input-group-addon">Website</h5>
          <div className="form-control">{user.website}</div>
        </label>
        <label className="input-group">
          <h5 className="input-group-addon">Nationality</h5>
          <div className="form-control">{user.nationality}</div>
        </label>
        <label className="input-group">
          <h5 className="input-group-addon">About me</h5>
          <div className="form-control">{user.aboutMe}</div>
        </label>
      </div>
    );

    let listOfTeamProfiles;
    if (teamProfiles.length) {
      listOfTeamProfiles = (
        <ul className="list-group list-group-flush">
          {teamProfiles}
        </ul>
      );
    }

    return (
      <div id="Profile" className="list-group">
        <div id="ProfileInformation" className="accordion list-group-item" role="tablist" aria-multiselectable="true">
          <section className="panel panel-default">
            <header href="#" className="panel-heading list-group-item-heading" role="tab" id="ProfileHeading">
              <h4 className="panel-title" data-toggle="collapse" data-parent="#ProfileInformationAccordion" href="#ProfileCollapse"
                aria-expanded="true" aria-controls="ProfileCollapse">Informations...</h4>
            </header>

            <section id="ProfileCollapse" className="panel-collapse collapse in list-group-item-text"
              role="tabpanel" aria-labelledby="LinkedTeamsHeading">
              {profileInformation}
            </section>
          </section>
        </div>

        <div id="ListOfTeamProfilesAccordion" className="accordion list-group-item" role="tablist" aria-multiselectable="true">
          <section className="panel panel-default">
            <header className="panel-heading" role="tab" id="LinkedTeamsHeading">
              <h4 className="panel-title" data-toggle="collapse" data-parent="#ListOfTeamProfilesAccordion" href="#LinkedTeamsCollapse"
                aria-expanded="true" aria-controls="LinkedTeamsCollapse">Linked teams...</h4>
            </header>

            <section id="LinkedTeamsCollapse" className="panel-collapse collapse"
              role="tabpanel" aria-labelledby="LinkedTeamsHeading">
              {listOfTeamProfiles}
            </section>
          </section>
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
