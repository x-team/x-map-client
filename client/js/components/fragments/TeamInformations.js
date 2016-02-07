import React, { Component, PropTypes } from 'react';

class TeamInformations extends Component {
  render() {
    const { team } = this.props;

    return (
      <div id="TeamInformations" className="accordion list-group-item" role="tablist" aria-multiselectable="true">
        <section className="panel panel-default">
          <header href="#" className="panel-heading list-group-item-heading" role="tab" id="TeamInformationsHeading">
            <h4 className="panel-title" data-toggle="collapse" data-parent="#TeamInformations"
              aria-expanded="true" aria-controls="TeamInformationsCollapse"
              href="#TeamInformationsCollapse">Information</h4>
          </header>

          <section id="TeamInformationsCollapse" className="panel-collapse collapse in list-group-item-text"
            role="tabpanel" aria-labelledby="TeamInformationsHeading">
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
          </section>
        </section>
      </div>
    );
  }
}

TeamInformations.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
};

export default TeamInformations;
