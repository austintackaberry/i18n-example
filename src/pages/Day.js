import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Weather from '../components/Weather';
import { FormattedMessage } from 'react-intl';

class Day extends Component {
  render() {
    return (
      <div>
        <Weather />
        <Link to="/">
          <FormattedMessage id="Day.homeLink" defaultMessage="Go back home" />
        </Link>
      </div>
    );
  }
}

export default Day;
