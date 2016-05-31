import React from 'react';
import { Router, Route, IndexRedirect, browserHistory as history } from 'react-router';
import { h, hh } from 'react-hyperscript-helpers';

import Main from './Main';
import Resume from './Resume';
import About from './About';
import ContactInfo from '../components/ContactInfo';
import Explain from '../components/Explain';

import Theme from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends React.Component {

  render() {
    return (
      h(Theme, { muiTheme: getMuiTheme() }, [
        h(Router, { history }, [
          h(Route, { path: '/', component: Main }, [
            h(IndexRedirect, { to: 'about' }),
            h(Route, { path: 'about', component: About }),
            h(Route, { path: 'resume', component: Resume }),
            h(Route, { path: 'contact', component: ContactInfo }),
            h(Route, { path: 'explain', component: Explain })
          ])
        ])
      ])
    );
  }

}

export default hh(App);
