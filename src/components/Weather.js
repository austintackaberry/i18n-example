import React from 'react';
import {FormattedMessage} from 'react-intl';
import {injectIntl, defineMessages} from 'react-intl';

const allMessages = defineMessages({
    pageTitle: {id: 'Weather.title', defaultMessage: "Weather Title"}
});

function Weather(props) {

    // helper function for getting a message translation
    const msg = key => props.intl.formatMessage(allMessages[key]);

    return (
        <React.Fragment>
            <h3>{msg('pageTitle')}</h3>
            <p>
                <FormattedMessage id="Weather.message" defaultMessage="Because it is sunny!"/>
            </p>
        </React.Fragment>
    );
}

export default injectIntl(Weather);
