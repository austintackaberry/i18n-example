import React from 'react';
import {FormattedMessage} from 'react-intl';
import {injectIntl, defineMessages} from 'react-intl';

const allMessages = defineMessages({
    addressTitle: {id: 'field.address.title', defaultMessage: "Home address"}
});

function Weather(props) {

    // helper function for getting a message translation
    const msg = key => props.intl.formatMessage(allMessages[key]);

    return (
        <React.Fragment>
            <h3>{msg('addressTitle')}</h3>
            <p>
                <FormattedMessage id="Weather.message" defaultMessage="Because it is sunny!"/>
            </p>
        </React.Fragment>
    );
}

export default injectIntl(Weather);
