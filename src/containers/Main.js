import React from 'react';
import { div } from 'react-hyperscript-helpers';
import { api } from '../utils';

import moment from 'moment';

import ContactInfo from '../components/ContactInfo';

const mangleDates = job => {
  const { start, end } = job;
  return { ...job, start: formatDate(start), end: end ? formatDate(end) : 'Present' };
};

const formatDate = date => moment(date).format('MMM YYYY');

class Main extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentWillMount() {
    api('jobs')
      .then(res => res.json())
      .then(data => data.map(mangleDates).reverse())
      .then(data => this.setState({ jobs: data }));

    api('contactInfo')
      .then(res => res.json())
      .then(data => data.filter(datum => datum !== null))
      .then(data => this.setState({ contacts: data }));
  }

  render() {
    const { children } = this.props;
    const { jobs = [], contacts = [] } = this.state;

    return (
      div([
        ContactInfo({ contacts }),
        React.Children.map(children, child => React.cloneElement(child, { jobs }))
      ])
    );

  }

}

export default Main;
