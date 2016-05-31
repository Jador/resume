import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './styles/index.css';
import App from './containers/App';

injectTapEventPlugin();
ReactDOM.render(App(), document.getElementById('content'));
