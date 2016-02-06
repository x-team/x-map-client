import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import ErrorList from '../forms/ErrorList';

class TeamForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = props.team;
  }

  onSubmit(e) {
    e.preventDefault();
    const { onSubmit, onSuccess } = this.props;
    onSubmit(this.state, onSuccess);
  }

  onInputChange(field, e) {
    this.setState({[field]: e.target.value});
  }

  render() {
    const { errors } = this.props;
    return (
      <div id="TeamForm">
        <ErrorList errors={errors} showFieldErrors/>
        <form onSubmit={this.onSubmit.bind(this)}>
          <fieldset className="form-group">
            <label>Team name*</label>
            <input type="text" className="form-control" placeholder="Name" value={this.state.name}
              minLength="2" maxLength="32" onChange={this.onInputChange.bind(this, 'name')} required/>
            <small className="text-muted">Max length 32 chars.</small>
          </fieldset>

          <fieldset className="form-group">
            <label>Short summary*</label>
            <input type="text" className="form-control" placeholder="Summary" value={this.state.summary}
              maxLength="128" onChange={this.onInputChange.bind(this, 'summary')} required/>
            <small className="text-muted">Max length 128 chars.</small>
          </fieldset>

          <fieldset className="form-group">
            <label>Long description</label>
            <textarea className="form-control" placeholder="Description" value={this.state.description}
              maxLength="1024" onChange={this.onInputChange.bind(this, 'description')}/>
            <small className="text-muted">Max length 1024 chars.</small>
          </fieldset>

          <fieldset className="form-group">
            <button className="btn btn-primary" type="submit">Save</button>
            <span> </span>
            <Link className="btn btn-secondary" to={`/team/${this.state.id}`} title={this.state.name}>Cancel</Link>
          </fieldset>
        </form>
      </div>
    );
  }
}

TeamForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  errors: PropTypes.object,
  team: PropTypes.shape({
    id: PropTypes.string
  })
};

TeamForm.defaultProps = {
  team: {}
};

export default TeamForm;
