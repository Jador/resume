import React from 'react';
import { Router, Route, IndexRedirect, browserHistory as history } from 'react-router';
import { h, hh } from 'react-hyperscript-helpers';

import Main from './Main';
import Resume from './Resume';
import Me from '../components/Me';
import ContactInfo from '../components/ContactInfo';

import Theme from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends React.Component {

  render() {
    return (
      h(Theme, { muiTheme: getMuiTheme() }, [
        h(Router, { history }, [
          h(Route, { path: '/', component: Main }, [
            h(IndexRedirect, { to: 'about' }),
            h(Route, { path: 'about', component: Me }),
            h(Route, { path: 'resume', component: Resume }),
            h(Route, { path: 'contact', component: ContactInfo })
          ])
        ])
      ])
    );
  }

}

export default hh(App);
