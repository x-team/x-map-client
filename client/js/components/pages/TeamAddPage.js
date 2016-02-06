import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TeamActions from '../../actions/TeamActions';
import TeamForm from '../forms/TeamForm';
import DocumentTitle from 'react-document-title';

class TeamAddPage extends Component {
  redirectToTeamsPage() {
    this.props.history.pushState(null, '/teams');
  }

  render() {
    const { actions, errors } = this.props;

    return (
      <DocumentTitle title="Add team | X-Map">
        <article id="TeamAddPage" className="page card">
          <header className="card-header">
            <h3 className="card-title">Add team</h3>
            <p className="card-subtitle">Create new team then edit the team to add people.</p>
          </header>

          <div className="card-block">
            <TeamForm onSubmit={actions.teamCreate} onSuccess={this.redirectToTeamsPage.bind(this)} errors={errors}/>
          </div>
        </article>
      </DocumentTitle>
    );
  }
}

TeamAddPage.propTypes = {
  history: PropTypes.object.isRequired,
  actions: PropTypes.object,
  errors: PropTypes.shape({
    globalErrors: PropTypes.array,
    fieldErrors: PropTypes.object
  })
};

function mapStateToProps(state) {
  return {
    errors: state.errors.teamCreate
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TeamActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamAddPage);
