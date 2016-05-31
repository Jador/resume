import React from 'react';
import { div } from 'react-hyperscript-helpers';
import { api } from '../utils';

import moment from 'moment';

import Header from '../components/Header';
import Me from '../components/Me';
import ContactInfo from '../components/ContactInfo';
import JobList from '../components/JobList';
import Education from '../components/EducationList';
import Fin from '../components/Fin';

class Main extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentWillMount() {
    api('jobs')
      .then(res => res.json())
      .then(data => data.map(mangleDates).reverse())
      .then(jobs => this.setState({ jobs }));

    api('contactInfo')
      .then(res => res.json())
      .then(data => data.filter(datum => datum !== null))
      .then(contacts => this.setState({ contacts }));

    api('about')
      .then(res => res.json())
      .then(about => this.setState({ about }));

    api('education')
      .then(res => res.json())
      .then(data => data.reverse())
      .then(education => this.setState({ education }));

    api('closing')
      .then(res => res.json())
      .then(closing => this.setState({ closing }));
  }

  render() {
    const { children } = this.props;
    const { about, jobs = [], contacts = [], education = [], closing } = this.state;

    return (
      div([
        Header(),
        Me({ about }),
        ContactInfo({ contacts }),
        JobList({ jobs }),
        Education({ education }),
        Fin({ closing })
      ])
    );

  }

}

const mangleDates = job => {
  const { start, end } = job;
  return { ...job, start: formatDate(start), end: end ? formatDate(end) : 'Present' };
};

const formatDate = date => moment(date).format('MMM YYYY');

export default Main;
