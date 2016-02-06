import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import ErrorList from '../forms/ErrorList';

class ProfileForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = props.user;
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
      <div id="ProfileForm">
        <ErrorList errors={errors} showFieldErrors/>
        <form onSubmit={this.onSubmit.bind(this)}>
          <fieldset className="form-group">
            <label>blabla</label>
            <input type="email" className="form-control" placeholder="Email" value={this.state.email}
              onChange={this.onInputChange.bind(this, 'email')} required/>
            <small className="text-muted">Max length 32 chars.</small>
          </fieldset>

          <fieldset className="form-group">
            <label>blabla</label>
            <input type="text" className="form-control" placeholder="First name" value={this.state.firstName}
              onChange={this.onInputChange.bind(this, 'firstName')} required/>
          </fieldset>

          <fieldset className="form-group">
            <label>blabla</label>
            <input type="text" className="form-control" placeholder="Last name" value={this.state.lastName}
              onChange={this.onInputChange.bind(this, 'lastName')} required/>
          </fieldset>

          <fieldset className="form-group">
            <label>blabla</label>
            <input type="text" className="form-control" placeholder="Skype ID" value={this.state.skypeId}
              onChange={this.onInputChange.bind(this, 'skypeId')}/>
          </fieldset>

          <fieldset className="form-group">
            <label>blabla</label>
            <input type="text" className="form-control" placeholder="Slack ID" value={this.state.slackId}
              onChange={this.onInputChange.bind(this, 'slackId')}/>
          </fieldset>

          <fieldset className="form-group">
            <label>blabla</label>
            <input type="text" className="form-control" placeholder="Website" value={this.state.website}
              onChange={this.onInputChange.bind(this, 'website')}/>
          </fieldset>

          <fieldset className="form-group">
            <label>blabla</label>
            <input type="text" className="form-control" placeholder="Nationality" value={this.state.nationality}
              onChange={this.onInputChange.bind(this, 'nationality')}/>
          </fieldset>

          <fieldset className="form-group">
            <label>blabla</label>
            <textarea className="form-control" placeholder="About me" value={this.state.aboutMe}
              onChange={this.onInputChange.bind(this, 'aboutMe')}/>
          </fieldset>

          <fieldset className="form-group">
            <button className="btn btn-primary" type="submit">Save</button>
            <span> </span>
            <Link className="btn btn-secondary" to={`/profile/${this.state.id}`}
              title={`${this.state.firstName} ${this.state.lastName}`}>Cancel</Link>
          </fieldset>
        </form>
      </div>
    );
  }
}

ProfileForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  errors: PropTypes.object,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
};

export default ProfileForm;
