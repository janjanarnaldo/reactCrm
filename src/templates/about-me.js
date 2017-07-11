import React, { Component } from 'react';

class AboutPage extends Component {
  render() {
    return (
        <div className="about-container">
          <p>I am { this.props.name }</p>
        </div>
    );
  }
}

export default AboutPage;

