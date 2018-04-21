import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

ReactDOM.render(
  <BrowserRouter>
    <IntlProvider>
      <App />
    </IntlProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
