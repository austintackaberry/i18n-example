import React from 'react';
import { FormattedMessage } from 'react-intl';

function Weather() {
  return (
    <p>
      <FormattedMessage id="Weather.message" defaultMessage="Because it is sunny!" />
    </p>
  );
}

export default Weather;
