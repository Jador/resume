import React from 'react';
import { Router, Route, IndexRoute, hashHistory as history } from 'react-router';
import { h, hh } from 'react-hyperscript-helpers';

import Main from './Main';
import JobList from '../components/JobList';

import Theme from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends React.Component {

  render() {
    return (
      h(Theme, { muiTheme: getMuiTheme() }, [
        h(Router, { history }, [
          h(Route, { path: '/', component: Main }, [
            h(IndexRoute, { component: JobList })
          ])
        ])
      ])
    );
  }

}

export default hh(App);
