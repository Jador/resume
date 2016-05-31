import React from 'react';
import { div } from 'react-hyperscript-helpers';
import * as api from '../api';

import Header from '../components/Header';

class Main extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentWillMount() {

    const { location: { pathname } } = this.props;
    this.handleRoute(pathname, this.state);

  }

  componentWillReceiveProps(nextProps) {

    const { location: { pathname } } = nextProps;
    this.handleRoute(pathname, this.state);

  }

  handleRoute(pathname, state) {
    if(pathname === '/about' && !state.about) {
      api.getAbout().then(about => this.setState({ about }));
    } else if(pathname === '/resume' && !state.jobs) {
      api.getJobs().then(jobs => this.setState({ jobs }));
      api.getEducation().then(education => this.setState({ education }));
    } else if (pathname === '/contact' && !state.contacts) {
      api.getContactInfo().then(contacts => this.setState({ contacts }));
    }
  }

  getStateSlice(pathname) {
    if(pathname === '/about') return { about: this.state.about };
    if(pathname === '/resume') return this.state; //TODO
    if(pathname === '/contact') return { contacts: this.state.contacts };
  }

  render() {
    const { children, location: { pathname } } = this.props;

    return (
      div([
        Header(),
        React.Children.map(children, child => React.cloneElement(child, this.getStateSlice(pathname)))
      ])
    );

  }

}

export default Main;
