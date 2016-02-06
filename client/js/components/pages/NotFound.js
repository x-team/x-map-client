import React, { Component } from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

class NotFound extends Component {
  render() {
    return (
      <DocumentTitle title="Page Not Found | X-Map">
        <article id="NotFound" className="panel card">
          <header className="card-block">
            <h4 className="card-title">Page not found.</h4>
            <p className="card-subtitle">Feeling lost?</p>
            <Link className="card-link" to="/">Go Home</Link>
          </header>
        </article>
      </DocumentTitle>
    );
  }
}

export default NotFound;
