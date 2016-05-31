import 'whatwg-fetch';
import 'es6-promise';
import moment from 'moment';

const URI = 'https://resume-66859.firebaseio.com/';
const api = (url) => fetch(`${URI}/${url}.json`).then(res => res.json());

export const getAbout = () => api('about');

export const getJobs = () => api('jobs').then(data => data.map(mangleDates).reverse());

export const getEducation = () => api('education').then(data => data.reverse());

export const getContactInfo = () => api('contactInfo').then(data => data.filter(datum => datum !== null));

export const getClosing = () => api('closing');

export const getInterests = () => api('interests');

const mangleDates = job => {
  const { start, end } = job;
  return { ...job, start: formatDate(start), end: end ? formatDate(end) : 'Present' };
};

const formatDate = date => moment(date).format('MMM YYYY');
